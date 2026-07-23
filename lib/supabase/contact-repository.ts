import "server-only";
import { supabaseAdmin } from "./client";
import type { ContactFormValues } from "@/lib/validations";

export interface ContactSubmissionRecord {
  id: string;
  created_at: string;
}

export type SaveContactResult =
  | { ok: true; record: ContactSubmissionRecord }
  | { ok: false; error: string };

/**
 * Enregistre une demande de contact dans Supabase.
 *
 * Pour ajouter une nouvelle colonne à l'avenir :
 * 1. Ajouter la colonne dans supabase/schema.sql (table contact_submissions).
 * 2. Ajouter le champ correspondant dans ContactFormValues (lib/validations.ts).
 * 3. L'ajouter à l'objet inséré ci-dessous.
 * Aucune autre partie de l'application n'a besoin d'être modifiée.
 */
export async function saveContactSubmission(
  data: Omit<ContactFormValues, "website">
): Promise<SaveContactResult> {
  if (!supabaseAdmin) {
    return {
      ok: false,
      error: "Supabase n'est pas configuré (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY manquants).",
    };
  }

  const { data: inserted, error } = await supabaseAdmin
    .from("contact_submissions")
    .insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      project_type: data.projectType,
      message: data.message,
    })
    .select("id, created_at")
    .single();

  if (error || !inserted) {
    return { ok: false, error: error?.message ?? "Insertion Supabase échouée." };
  }

  return { ok: true, record: inserted as ContactSubmissionRecord };
}
