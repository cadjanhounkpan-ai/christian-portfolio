import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { t } from "@/lib/utils";
import type { Locale, WebProject } from "@/types";

interface ProjectCardWebProps {
  project: WebProject;
  locale: Locale;
  viewLabel: string;
  placeholderNotice: string;
}

export function ProjectCardWeb({ project, locale, viewLabel, placeholderNotice }: ProjectCardWebProps) {
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
        <h3 className="mb-2 font-display text-base font-semibold text-ink-800">{project.name}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600">
          {t(project.description, locale)}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} tone="neutral">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {viewLabel}
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-ink-800"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
