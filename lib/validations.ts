import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères." })
    .max(100),
  email: z
    .string()
    .trim()
    .email({ message: "Merci de renseigner une adresse e-mail valide." }),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),
  projectType: z
    .string()
    .trim()
    .min(1, { message: "Merci de sélectionner un type de projet." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Votre message doit contenir au moins 10 caractères." })
    .max(2000),
  // Champ honeypot : doit rester vide. Rempli = bot.
  website: z.string().max(0, { message: "Requête invalide." }).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
