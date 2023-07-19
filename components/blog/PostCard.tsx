import { FrontMatter } from '@/pages/blog';
import { formatDate } from '@/utils/dateUtils';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { ButtonLink } from '../atoms/Button';

interface PostCardsProps {
  posts: {
    slug: string;
    frontmatter: FrontMatter;
  }[];
}

const PostCards: React.FC<PostCardsProps> = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:justify-between items-stretch">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={frontmatter.title}
          className="borderDefaultColor border flex flex-col gap-4 p-4 rounded-lg flex-grow basis-1/2 "
        >
          <p className="text-secondary font-light text-small">{formatDate(frontmatter.date)}</p>
          <h3 className="font-medium">{frontmatter.title}</h3>
          <div className="flex-grow">
            <p className="text-secondary text-small">{frontmatter.summary}</p>
          </div>
          <div className="mt-auto">
            <ButtonLink
              variant="secondary"
              className="dark:border-none"
              width="full"
              href={slug as string}
            >
              Read more
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostCards;
