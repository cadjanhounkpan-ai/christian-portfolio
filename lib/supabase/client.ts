import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Client Supabase strictement côté serveur.
 * "server-only" fait échouer le build si ce fichier est importé
 * accidentellement depuis un composant client — aucune clé ne peut
 * donc fuiter vers le navigateur.
 *
 * On utilise la clé "service role" car l'insertion se fait uniquement
 * depuis la Server Action (jamais depuis le navigateur), avec RLS activé
 * et sans policy publique : seule cette clé peut écrire dans la table.
 */
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}

export const supabaseAdmin = getSupabaseAdmin();
