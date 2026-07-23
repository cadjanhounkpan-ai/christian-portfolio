import "server-only";
import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/validations";

export type SendEmailResult = { ok: true } | { ok: false; error: string };

/**
 * Envoie une notification e-mail au propriétaire du portfolio après
 * l'enregistrement réussi d'une demande de contact dans Supabase.
 * Un échec ici n'affecte jamais les données déjà enregistrées :
 * cette fonction est toujours appelée APRÈS la sauvegarde Supabase,
 * et son erreur est gérée séparément par l'appelant (app/actions.ts).
 */
export async function sendContactNotification(
  data: Omit<ContactFormValues, "website">,
  submissionId: string
): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const receivingEmail = process.env.CONTACT_RECEIVING_EMAIL;

  if (!apiKey || !receivingEmail) {
    console.log("[email] Resend non configuré — notification non envoyée pour", submissionId);
    return { ok: false, error: "Resend non configuré (RESEND_API_KEY / CONTACT_RECEIVING_EMAIL manquants)." };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // À REMPLACER par un domaine vérifié sur Resend
      to: receivingEmail,
      replyTo: data.email,
      subject: `Nouveau contact portfolio — ${data.projectType}`,
      text: [
        `Nom : ${data.name}`,
        `Email : ${data.email}`,
        `Téléphone : ${data.phone || "—"}`,
        `Type de projet : ${data.projectType}`,
        `Référence Supabase : ${submissionId}`,
        "",
        data.message,
      ].join("\n"),
    });

    if (error) {
      return { ok: false, error: error.message };
    }

    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Erreur d'envoi inconnue." };
  }
}
