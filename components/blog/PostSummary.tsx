import { FrontMatter } from '@/pages/blog';
import { formatDate } from '@/utils/dateUtils';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import InternalLink from '../atoms/InternalLink';

interface PostSummaryProps {
  post: {
    slug: ParsedUrlQuery;
    frontmatter: FrontMatter;
  };
}

const PostSummary: React.FC<PostSummaryProps> = ({ post }) => {
  const { slug, frontmatter } = post;
  const { title, summary, date, tags } = frontmatter;

  return (
    <article className="flex items-start justify-between gap-5 sm:flex-col sm:gap-2">
      <p className="basis-1/3 text-secondary">{formatDate(date)}</p>

      <div className="basis-2/3">
        <InternalLink href={slug} removeClassNames>
          <h2 className="font-bold text-h3">{title}</h2>
        </InternalLink>
        <div className="flex gap-5 mb-5">
          {tags?.map((tag) => (
            <p className="text-neutral-blue uppercase text-small" key={tag}>
              {tag}
            </p>
          ))}
        </div>
        <p className="text-secondary mb-5">{summary}</p>
        <InternalLink href={slug}>
          <span>Read more</span>
        </InternalLink>
      </div>
    </article>
  );
};

export default PostSummary;
