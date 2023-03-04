import PageHeader from '@/components/atoms/PageHeader';
import PostSummary from '@/components/blog/PostSummary';
import PageLayout from '@/components/layouts/PageLayout';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { ParsedUrlQuery } from 'querystring';
import { getAllVisiblePosts } from '@/utils/fetchUtils';
import SearchBox from '@/components/blog/SearchBox';
import { useRouter } from 'next/router';
export interface FrontMatter {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  author: string;
}

export interface IndexProps {
  posts: {
    slug: ParsedUrlQuery;
    frontmatter: FrontMatter;
  }[];
  uniqueTags: string[];
}

const Index: NextPage<IndexProps> = ({ posts, uniqueTags }) => {
  const { query } = useRouter();
  const [searchTags, setSearchTags] = useState<string[]>([]);

  useEffect(() => {
    if (!query.tags) return;

    setSearchTags([query.tags as string]);
  }, [query]);

  const filteredPosts = searchTags.length
    ? posts.filter((post) => searchTags.every((tag) => post.frontmatter.tags.includes(tag)))
    : posts;

  return (
    <PageLayout>
      <PageHeader header="Blog" />
      <SearchBox searchTags={searchTags} setSearchTags={setSearchTags} uniqueTags={uniqueTags} />
      {filteredPosts?.map((post) => {
        const { slug, frontmatter } = post;
        return <PostSummary key={frontmatter.title} post={{ slug, frontmatter }} />;
      })}
    </PageLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const posts = getAllVisiblePosts();

  const allTags = posts?.flatMap((post) => post.frontmatter.tags);
  const uniqueTags = [...new Set(allTags)];

  return {
    props: {
      posts,
      uniqueTags,
    },
  };
}
