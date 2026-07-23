import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { t } from "@/lib/utils";
import type { Locale, SeoProject } from "@/types";

interface ProjectCardSeoProps {
  project: SeoProject;
  locale: Locale;
  learnMoreLabel: string;
  placeholderNotice: string;
  onOpen: (project: SeoProject) => void;
}

export function ProjectCardSeo({ project, locale, learnMoreLabel, placeholderNotice, onOpen }: ProjectCardSeoProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden !p-0">
      <div className="relative aspect-video w-full overflow-hidden bg-surface-muted">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 400px, 90vw"
          className="object-cover"
        />
        {project.isPlaceholder && (
          <span className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium text-slate-600 backdrop-blur">
            {placeholderNotice}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge tone="primary" className="mb-3 w-fit normal-case">
          {project.seoType}
        </Badge>
        <h3 className="mb-2 font-display text-base font-semibold text-ink-800">{project.name}</h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">
          {t(project.description, locale)}
        </p>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 focus-visible:outline-none focus-visible:shadow-focus rounded"
        >
          {learnMoreLabel}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}
