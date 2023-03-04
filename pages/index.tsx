import PageHeader from '@/components/atoms/PageHeader';
import PageLayout from '@/components/layouts/PageLayout';
import React from 'react';
import { FrontMatter } from './blog';
import PostSummary from '@/components/blog/PostSummary';
import InternalLink from '@/components/atoms/InternalLink';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import FeaturedProject from '@/components/project/FeaturedProject';
import allProjects from '@/data/projects/allProjects';
import useMobileWidth from '@/hooks/useMobile';
import ProjectCard, { Project } from '@/components/project/ProjectCard';
import { getAllVisiblePosts } from '@/utils/fetchUtils';
import { ParsedUrlQuery } from 'querystring';

interface HomeProps {
  featuredPost: {
    slug: ParsedUrlQuery;
    frontmatter: FrontMatter;
  };
  featuredProject: Project;
}

const Home: React.FC<HomeProps> = ({ featuredPost, featuredProject }) => {
  const { isMobile } = useMobileWidth();

  return (
    <PageLayout>
      {/* LATEST */}
      <PageHeader header="Latest" />
      <PostSummary
        key={featuredPost.frontmatter.title}
        post={{ slug: featuredPost.slug, frontmatter: featuredPost.frontmatter }}
      />
      <InternalLink href="/blog" className="self-end">
        <span className="flex items-center gap-2">
          View all posts
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </InternalLink>

      {/* FEATURED PROJECT */}
      <PageHeader header="Featured project" />
      {isMobile ? (
        <ProjectCard project={featuredProject} />
      ) : (
        <FeaturedProject project={featuredProject} />
      )}
      <InternalLink href="/projects" className="self-end">
        <span className="flex items-center gap-2">
          View all projects
          <ArrowRightIcon className="w-4 h-4" />
        </span>
      </InternalLink>
    </PageLayout>
  );
};
export default Home;

export async function getStaticProps() {
  const posts = getAllVisiblePosts();
  const featuredPost = posts[0];
  const featuredProject = allProjects[0];

  return {
    props: {
      featuredPost,
      featuredProject,
    },
  };
}
