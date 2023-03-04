import { XMarkIcon } from '@heroicons/react/24/solid';
import classNames from 'classnames';
import React from 'react';

interface SearchBoxProps {
  searchTags: string[];
  setSearchTags: React.Dispatch<React.SetStateAction<string[]>>;
  uniqueTags: string[];
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchTags, uniqueTags, setSearchTags }) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-5">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-h3">Search by tags</h3>
        {!!searchTags.length && (
          <button
            onClick={() => setSearchTags([])}
            aria-roledescription="Clear all"
            className="flex gap-1 items-center text-secondary"
          >
            <XMarkIcon className="w-6 h-6 fill-text-secondary" />
            <span>Clear all</span>
          </button>
        )}
      </div>

      <div className="flex gap-5 flex-wrap">
        {uniqueTags.map((tag) => (
          <button
            aria-roledescription={`tag:${tag}`}
            className={classNames(
              'text-neutral-blue uppercase hover:underline cursor-pointer text-sm',
              searchTags.includes(tag) && 'underline',
            )}
            onClick={() =>
              setSearchTags((prevValue) =>
                prevValue.includes(tag)
                  ? prevValue.filter((value) => value !== tag)
                  : [...prevValue, tag],
              )
            }
            key={tag}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
