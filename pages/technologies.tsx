import PageHeader from '@/components/atoms/PageHeader';
import PageLayout from '@/components/layouts/PageLayout';
import data from '@/data/technologies/technologies';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import React from 'react';

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
            <div key={name}>
              <li className="font-bold text-h3">{name}</li>
              <span className="text-secondary">{description}</span>
            </div>
          ))}
        </ul>
      </PageLayout>
    </>
  );
};

export default Technologies;
