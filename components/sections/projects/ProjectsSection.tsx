"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tabs, type TabItem } from "@/components/ui/Tabs";
import { Carousel } from "@/components/ui/Carousel";
import { ProjectCardGeneric } from "./ProjectCardGeneric";
import { ProjectCardWeb } from "./ProjectCardWeb";
import { ProjectCardSeo } from "./ProjectCardSeo";
import { ProjectModal } from "./ProjectModal";
import { projects, getProjectsByCategory } from "@/data/projects";
import type { Locale, Project, SeoProject, WebProject  } from "@/types";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

interface ProjectsSectionProps {
  locale: Locale;
  dict: Dictionary;
}

type TabId = "all" | "web" | "seo";

export function ProjectsSection({ locale, dict }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState<TabId>("all");
  const [selectedSeoProject, setSelectedSeoProject] = useState<SeoProject | null>(null);
  const [orderedProjects, setOrderedProjects] = useState<Project[]>(projects);

  // Le premier projet affiché dans "Tous" varie à chaque rechargement,
  // en faisant simplement pivoter la liste (pas de réorganisation brutale).
  useEffect(() => {
    const offset = Math.floor(Math.random() * projects.length);
    setOrderedProjects([...projects.slice(offset), ...projects.slice(0, offset)]);
  }, []);

  const tabs: TabItem[] = [
    { id: "all", label: dict.projects.tabAll },
    { id: "web", label: dict.projects.tabWeb },
    { id: "seo", label: dict.projects.tabSeo },
  ];

  const webProjects = getProjectsByCategory("web") as WebProject[];
  const seoProjects = getProjectsByCategory("seo") as SeoProject[];

  return (
    <section id="realisations" className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow={dict.projects.eyebrow}
          title={dict.projects.title}
          subtitle={dict.projects.subtitle}
        />

        <div className="mt-14">
          <Tabs tabs={tabs} activeId={activeTab} onChange={(id) => setActiveTab(id as TabId)}>
            {activeTab === "all" && (
              <Carousel
                items={orderedProjects}
                prevLabel={dict.projects.prev}
                nextLabel={dict.projects.next}
                className="mx-auto max-w-xl"
                renderItem={(project) => (
                  <ProjectCardGeneric
                    project={project}
                    locale={locale}
                    viewLabel={dict.projects.viewProject}
                    learnMoreLabel={dict.projects.learnMore}
                    placeholderNotice={dict.projects.placeholderNotice}
                    onOpenSeo={setSelectedSeoProject}
                  />
                )}
              />
            )}

            {activeTab === "web" && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {webProjects.map((project) => (
                  <ProjectCardWeb
                    key={project.id}
                    project={project}
                    locale={locale}
                    viewLabel={dict.projects.viewProject}
                    placeholderNotice={dict.projects.placeholderNotice}
                  />
                ))}
              </div>
            )}

            {activeTab === "seo" && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {seoProjects.map((project) => (
                  <ProjectCardSeo
                    key={project.id}
                    project={project}
                    locale={locale}
                    learnMoreLabel={dict.projects.learnMore}
                    placeholderNotice={dict.projects.placeholderNotice}
                    onOpen={setSelectedSeoProject}
                  />
                ))}
              </div>
            )}
          </Tabs>
        </div>
      </Container>

      <ProjectModal
        project={selectedSeoProject}
        onClose={() => setSelectedSeoProject(null)}
        locale={locale}
        dict={dict}
      />
    </section>
  );
}
