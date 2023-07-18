import { logoClasses } from '../atoms/Contacticons';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import Github from '../logos/Github';
import ExternalLink from '../atoms/ExternalLink';

export interface Project {
  title: string;
  image: string;
  github?: string;
  website: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, image, website, description } = project;
  const github = project?.github;

  return (
    <div className="flex flex-col gap-5 border  borderDefaultColor rounded-lg">
      <ExternalLink href={website} isNonTextable>
        <div className="w-full h-64 overflow-hidden relative rounded-t-lg">
          <Image src={image} fill alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary-background to-transparent opacity-10 hover:opacity-50 transition-opacity duration-300" />
        </div>
      </ExternalLink>
      <div className="flex flex-col gap-5 px-5 pb-5">
        <h3 className="text-h3 font-bold">{title}</h3>
        <p className="text-secondary text-small">{description}</p>
      </div>
      <div className="mt-auto px-5 pb-5 flex items-center justify-between">
        <ExternalLink href={website}>
          <span className="flex items-center gap-2">
            View website
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </ExternalLink>
        {!!github && (
          <ExternalLink href={github}>
            <Github className={logoClasses} />
          </ExternalLink>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
