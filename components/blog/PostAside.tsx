import { PrevNextPost } from '@/pages/blog/[slug]';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import React, { FC } from 'react';
import InternalLink from '../atoms/InternalLink';
import AuthorInfo from './AuthorInfo';

interface PostAsideProps {
  author: string;
  tags: string[];
  prev?: PrevNextPost;
  next?: PrevNextPost;
}

const boxClasses = 'flex flex-col border-b borderDefaultColor pb-10';

const PostAside: FC<PostAsideProps> = ({ author, tags, prev, next }) => {
  return (
    <aside className="flex flex-col gap-10 text-small">
      <AuthorInfo author={author} />

      <div className={classNames(boxClasses, 'pt-10 border-t')}>
        <p className="text-secondary uppercase">Tags</p>
        <div className="flex flex-row flex-wrap gap-2">
          {tags.map((tag) => (
            <InternalLink className="uppercase" key={tag} href={`/blog?tags=${tag}`}>
              {tag}
            </InternalLink>
          ))}
        </div>
      </div>
      {!!prev && (
        <div className={boxClasses}>
          <p className="text-secondary uppercase">Previous post</p>
          <InternalLink href={`/blog/${prev.slug}`}>{prev.title}</InternalLink>
        </div>
      )}
      {!!next && (
        <div className={boxClasses}>
          <p className="text-secondary uppercase">Previous post</p>
          <InternalLink href={`/blog/${next.slug}`}>{next.title}</InternalLink>
        </div>
      )}

      <InternalLink href="/blog">
        <span className="flex gap-2 items-center">
          <ArrowLeftIcon className="w-3 h-3" />
          Back to blog
        </span>
      </InternalLink>
    </aside>
  );
};

export default PostAside;
