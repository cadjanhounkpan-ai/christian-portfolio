import type { Locale, Project } from "@/types";
import { ProjectCardWeb } from "./ProjectCardWeb";
import { ProjectCardSeo } from "./ProjectCardSeo";
import type { SeoProject } from "@/types";

interface ProjectCardGenericProps {
  project: Project;
  locale: Locale;
  viewLabel: string;
  learnMoreLabel: string;
  placeholderNotice: string;
  onOpenSeo: (project: SeoProject) => void;
}

export function ProjectCardGeneric({
  project,
  locale,
  viewLabel,
  learnMoreLabel,
  placeholderNotice,
  onOpenSeo,
}: ProjectCardGenericProps) {
  if (project.category === "web") {
    return (
      <ProjectCardWeb
        project={project}
        locale={locale}
        viewLabel={viewLabel}
        placeholderNotice={placeholderNotice}
      />
    );
  }

  return (
    <ProjectCardSeo
      project={project}
      locale={locale}
      learnMoreLabel={learnMoreLabel}
      placeholderNotice={placeholderNotice}
      onOpen={onOpenSeo}
    />
  );
}
