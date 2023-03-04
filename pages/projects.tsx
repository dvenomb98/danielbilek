import PageHeader from '@/components/atoms/PageHeader';
import ProjectCard from '@/components/project/ProjectCard';
import PageLayout from '@/components/layouts/PageLayout';
import allProjects from '@/data/projects/allProjects';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

const Projects: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Projects"
        description="Check out the latest projects i was involved on or created by myself"
      />
      <PageLayout>
        <PageHeader header="Projects" />
        <div className="flex flex-col lg:grid lg:grid-rows-auto lg:grid-cols-2 gap-5">
          {allProjects.map((project) => (
            <ProjectCard key={project.website} project={project} />
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Projects;
