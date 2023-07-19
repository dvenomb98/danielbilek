import PageHeader from '@/components/atoms/PageHeader';
import PageLayout from '@/components/layouts/PageLayout';
import React from 'react';
import { FrontMatter } from './blog';
import InternalLink from '@/components/atoms/InternalLink';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import FeaturedProject from '@/components/project/FeaturedProject';
import allProjects from '@/data/projects/allProjects';
import useMobileWidth from '@/hooks/useMobile';
import ProjectCard, { Project } from '@/components/project/ProjectCard';
import { getAllVisiblePosts } from '@/utils/fetchUtils';
import MainBanner from '@/components/banner/MainBanner';
import PostCards from '@/components/blog/PostCard';

interface HomeProps {
  featuredPosts: {
    slug: string;
    frontmatter: FrontMatter;
  }[];
  featuredProject: Project;
}

const Home: React.FC<HomeProps> = ({ featuredPosts, featuredProject }) => {
  const { isMobile } = useMobileWidth();

  return (
    <PageLayout>
      <MainBanner />
      {/* LATEST */}
      <PageHeader header="Latest" />
      <PostCards posts={featuredPosts} />
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
  const featuredPosts = posts.slice(-2);
  const featuredProject = allProjects[0];

  return {
    props: {
      featuredPosts,
      featuredProject,
    },
  };
}
