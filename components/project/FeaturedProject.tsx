import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import ExternalLink from '../atoms/ExternalLink';
import { Project } from './ProjectCard';

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  const { title, image, website, description } = project;

  return (
    <div className="flex gap-5 border borderDefaultColor rounded-lg">
      <ExternalLink href={website} isNonTextable>
        <div className="w-96 h-full overflow-hidden relative rounded-l-lg">
          <Image src={image} fill alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary-background to-transparent opacity-10 hover:opacity-50 transition-opacity duration-300" />
        </div>
      </ExternalLink>
      <div className="flex flex-col gap-5 p-5 basis-2/3">
        <h3 className="text-h3 font-bold">{title}</h3>
        <p className="text-secondary text-small">{description}</p>
        <ExternalLink href={website}>
          <span className="flex items-center gap-2">
            View website
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </ExternalLink>
      </div>
    </div>
  );
};

export default FeaturedProject;
