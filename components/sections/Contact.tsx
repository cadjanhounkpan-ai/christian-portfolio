"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Card } from "@/components/ui/Card";
import { submitContactForm } from "@/app/actions";
import { projectTypeOptions } from "@/data/project-types";
import { profile } from "@/data/profile";
import { t } from "@/lib/utils";
import type { ContactFormState, Locale } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface ContactProps {
  locale: Locale;
  dict: Dictionary;
}

const initialState: ContactFormState = { success: false };

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-500 px-8 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-600 disabled:opacity-70 focus-visible:outline-none focus-visible:shadow-focus"
    >
      {pending && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {pending ? pendingLabel : label}
    </button>
  );
}

export function Contact({ locale, dict }: ContactProps) {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const f = dict.contact.form;

  useEffect(() => {
    if (state.success && submittedOnce) {
      formRef.current?.reset();
    }
  }, [state, submittedOnce]);

  const projectTypeLabels = projectTypeOptions.map((opt) => ({
    value: opt.value,
    label: t(opt.label, locale),
  }));

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionTitle eyebrow={dict.contact.eyebrow} title={dict.contact.title} subtitle={dict.contact.subtitle} />

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Card className="bg-white">
            <form
              ref={formRef}
              action={(formData) => {
                setSubmittedOnce(true);
                formAction(formData);
              }}
              className="flex flex-col gap-5"
            >
              {/* Honeypot anti-spam — invisible pour les humains */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  name="name"
                  label={f.name}
                  placeholder={f.namePlaceholder}
                  required
                  error={state.errors?.name?.[0]}
                />
                <Input
                  name="email"
                  type="email"
                  label={f.email}
                  placeholder={f.emailPlaceholder}
                  required
                  error={state.errors?.email?.[0]}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  name="phone"
                  type="tel"
                  label={f.phone}
                  placeholder={f.phonePlaceholder}
                  error={state.errors?.phone?.[0]}
                />
                <Select
                  name="projectType"
                  label={f.projectType}
                  placeholder={f.projectTypePlaceholder}
                  options={projectTypeLabels}
                  required
                  error={state.errors?.projectType?.[0]}
                />
              </div>

              <Textarea
                name="message"
                label={f.message}
                placeholder={f.messagePlaceholder}
                required
                error={state.errors?.message?.[0]}
              />

              <div className="mt-2 flex items-center gap-4">
                <SubmitButton label={f.submit} pendingLabel={f.submitting} />

                <AnimatePresence mode="wait">
                  {submittedOnce && state.success && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm font-medium text-primary-600"
                    >
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      {f.successMessage}
                    </motion.p>
                  )}
                  {submittedOnce && !state.success && state.message === "server-error" && (
                    <motion.p
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-sm font-medium text-red-600"
                    >
                      <XCircle className="h-4 w-4" aria-hidden="true" />
                      {f.errorMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Card>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-sm font-medium text-slate-500">{dict.contact.directContact}</p>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-ink-700 transition-colors hover:text-primary-600"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-ink-700 transition-colors hover:text-primary-600"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              {profile.phone}
            </a>
            <div className="flex items-center gap-3 text-sm text-ink-700">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              {profile.location}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
