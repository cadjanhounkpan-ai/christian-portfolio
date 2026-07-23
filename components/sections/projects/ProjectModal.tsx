import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { t } from "@/lib/utils";
import type { Locale, SeoProject } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { Carousel } from "@/components/ui/Carousel";

interface ProjectModalProps {
  project: SeoProject | null;
  onClose: () => void;
  locale: Locale;
  dict: Dictionary;
}

export function ProjectModal({ project, onClose, locale, dict }: ProjectModalProps) {
  return (
    <Modal isOpen={!!project} onClose={onClose} title={project?.name} closeLabel={dict.projects.modal.close}>
      {project && (
        <div className="pt-14">
          {project.client && (
            <p className="mb-1 font-mono text-xs uppercase tracking-wide text-primary-600">
              {project.client}
            </p>
          )}
          <h2 className="mb-3 font-display text-2xl font-semibold text-ink-800">{project.name}</h2>
          <p className="mb-8 text-slate-600">{t(project.description, locale)}</p>


          {project.resultsGallery.length > 0 && (
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.resultsGallery.map((item, i) => (
                <div key={i}>
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-slate-200">
                    <Image src={item.image} alt={t(item.label, locale)} fill sizes="200px" className="object-cover" />
                  </div>
                  <p className="mt-1.5 text-center text-xs font-medium text-slate-500">{t(item.label, locale)}</p>
                </div>
              ))}
            </div>
          )}


          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-700">
                {dict.projects.modal.objectives}
              </h3>
              <ul className="space-y-2">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                    {t(obj, locale)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-700">
                {dict.projects.modal.actions}
              </h3>
              <ul className="space-y-2">
                {project.actions.map((action, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-600">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                    {t(action, locale)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.results.length > 0 && (
            <div className="mt-8 rounded-xl bg-primary-50 p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700">
                {dict.projects.modal.results}
              </h3>
              <div className="space-y-3">
                {project.results.map((result, i) => (
                  <div key={i} className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:gap-3">
                    <span className="font-medium text-ink-800">{t(result.metric, locale)} :</span>
                    <span className="text-slate-500 line-through">{result.before}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
                    <span className="font-semibold text-primary-700">{result.after}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}
