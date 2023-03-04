import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import { FrontMatter } from '.';
import PageLayout from '@/components/layouts/PageLayout';
import PageHeader from '@/components/atoms/PageHeader';
import { formatDate } from '@/utils/dateUtils';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PostAside from '@/components/blog/PostAside';
import { NextSeo } from 'next-seo';
import moment from 'moment';

export interface PrevNextPost {
  title: string;
  slug: string;
}

interface SinglePostProps {
  frontmatter: FrontMatter;
  content: string;
  prev?: PrevNextPost;
  next?: PrevNextPost;
}

const SinglePost: NextPage<SinglePostProps> = ({ frontmatter, content, prev, next }) => {
  const { title, author, date, tags, summary } = frontmatter;

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        openGraph={{
          article: {
            authors: [author],
            tags: tags,
            publishedTime: date,
          },
        }}
      />
      <PageLayout>
        <p className="text-secondary -mb-10">{formatDate(date)}</p>
        <PageHeader header={title} />
        <div className="flex justify-between gap-10 sm:flex-col-reverse sm:gap-16">
          <PostAside author={author} tags={tags} prev={prev} next={next} />
          <ReactMarkdown className="prose markdown">{content}</ReactMarkdown>
        </div>
      </PageLayout>
    </>
  );
};

export default SinglePost;

export const getStaticPaths: GetStaticPaths<any> = async () => {
  const files = fs.readdirSync('data/posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', '') as string,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
  //Essentials for post
  const slug = params?.slug;
  const files = fs.readdirSync('data/posts');
  const fileName = fs.readFileSync(`data/posts/${slug}.md`, 'utf-8');

  // Get previous and next post
  const posts = files.map((file) => {
    const slug = file.replace('.md', '');
    const readFile = fs.readFileSync(`data/posts/${file}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    const { title, draft, date } = frontmatter;

    return {
      slug: slug,
      title: title,
      draft: draft,
      date: date,
    };
  });

  // sort posts by date in descending order (newest first)
  // filter posts that are in draft
  const sortedPosts = posts
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf())
    .filter((post) => !post.draft);

  const postIndex = sortedPosts.findIndex((post) => post.slug === slug);
  const prev = sortedPosts[postIndex + 1] || null;
  const next = sortedPosts[postIndex - 1] || null;

  const { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
      prev,
      next,
    },
  };
};
