"use server";

import { contactFormSchema } from "@/lib/validations";
import { saveContactSubmission } from "@/lib/supabase/contact-repository";
import { sendContactNotification } from "@/lib/email/resend-client";
import type { ContactFormState } from "@/types";

/**
 * Action serveur du formulaire de contact.
 *
 * Processus, dans l'ordre :
 * 1. Validation stricte côté serveur (Zod) — ne fait jamais confiance au client.
 * 2. Vérification du champ honeypot (anti-spam).
 * 3. Enregistrement dans Supabase (source de vérité : jamais perdu, même si l'e-mail échoue).
 * 4. Envoi d'une notification par e-mail via Resend (best-effort).
 * 5. Retour d'un message clair au visiteur.
 *
 * Le composant UI (components/sections/Contact.tsx) ne connaît que
 * cette fonction : toute la logique métier, Supabase et Resend restent
 * isolées dans leurs propres modules (lib/supabase, lib/email).
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    projectType: formData.get("projectType")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "", // honeypot
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot rempli => très probablement un bot. On répond "succès" sans rien
  // enregistrer ni envoyer, pour ne pas donner d'indice au bot.
  if (parsed.data.website) {
    return { success: true };
  }

  const { website: _honeypot, ...submission } = parsed.data;

  const saveResult = await saveContactSubmission(submission);

  if (!saveResult.ok) {
    console.error("[contact-form] Échec de l'enregistrement Supabase :", saveResult.error);
    return { success: false, message: "server-error" };
  }

  // L'e-mail est "best-effort" : son échec ne doit jamais faire perdre
  // la demande déjà enregistrée dans Supabase, ni bloquer la confirmation
  // affichée au visiteur.
  const emailResult = await sendContactNotification(submission, saveResult.record.id);
  if (!emailResult.ok) {
    console.error("[contact-form] Échec de l'envoi Resend (donnée conservée) :", emailResult.error);
  }

  return { success: true };
}
