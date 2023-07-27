import PageHeader from '@/components/atoms/PageHeader';
import PageLayout from '@/components/layouts/PageLayout';
import data from '@/data/technologies/technologies';
import classNames from 'classnames';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';

interface TechnologiesListProps {
  data: {
    name: string;
    description: string;
  };
}

const TechnologiesList: FC<TechnologiesListProps> = ({ data: { name, description } }) => {
  const { ref, inView } = useInView({
    delay: 150,
  });

  return (
    <div
      ref={ref}
      className={classNames(
        inView ? 'opacity-100 scale-100' : 'opacity-20 scale-90',
        'transition-all duration-500 ease-in-out',
      )}
    >
      <li className="font-bold text-h3">{name}</li>
      <span className="text-secondary">{description}</span>
    </div>
  );
};

const Technologies: NextPage = () => {
  return (
    <>
      <NextSeo
        title="Front end technologies"
        description="Check out the list of technologies I use on a daily basis"
      />
      <PageLayout>
        <PageHeader
          header="Technologies"
          description="Check out the list of technologies I use on a daily basis"
        />

        <ul className="flex flex-col gap-8">
          {data.map(({ name, description }) => (
            <TechnologiesList key={name} data={{ name, description }} />
          ))}
        </ul>
      </PageLayout>
    </>
  );
};

export default Technologies;
