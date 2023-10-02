import PageHeader from '@/components/atoms/PageHeader';
import ProjectCard from '@/components/project/ProjectCard';
import PageLayout from '@/components/layouts/PageLayout';
import allProjects from '@/data/projects/allProjects';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';
import FeaturedProject from '@/components/project/FeaturedProject';
import useMobileWidth from '@/hooks/useMobile';

const Projects: NextPage = () => {
  const { isMobile } = useMobileWidth();
  const featured = allProjects.find((p) => p.type === 'featured')!;
  return (
    <>
      <NextSeo
        title="Projects"
        description="Check out the latest projects i was involved on or created by myself"
      />
      <PageLayout>
        <PageHeader header="Featured project" />
        {isMobile ? <ProjectCard project={featured} /> : <FeaturedProject project={featured} />}
        <PageHeader header="Main projects" />
        <div className="flex flex-col lg:grid lg:grid-rows-auto lg:grid-cols-2 gap-5">
          {allProjects
            .filter((p) => p.type === 'main')
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
        <PageHeader header="Other projects" />
        <div className="flex flex-col lg:grid lg:grid-rows-auto lg:grid-cols-2 gap-5">
          {allProjects
            .filter((p) => p.type === 'secondary')
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Projects;
