import { Button } from '@/components/atoms/Button';
import ContactIcons from '@/components/atoms/Contacticons';
import Modal from '@/components/atoms/Modal';
import PageHeader from '@/components/atoms/PageHeader';
import ContactMeForm from '@/components/form/ContactMeForm';
import PageLayout from '@/components/layouts/PageLayout';
import data from '@/data/aboutme/aboutme';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import React from 'react';
import { useToggle } from 'react-use';

const AboutMe: NextPage = () => {
  const [showModal, toggle] = useToggle(false);

  return (
    <>
      <NextSeo
        title="About me"
        description="My name is Daniel Bílek, and I am a front-end developer with a passion for organised work, creative problem solving, and critical thinking. I aim to deliver high-quality, user-friendly websites and web applications."
      />

      <PageLayout>
        <PageHeader header="About me" />
        <div className="flex flex-row sm:flex-col sm:gap-16">
          {/* SIDEBAR */}
          <aside className="flex flex-col items-center gap-5 basis-1/3">
            <Image
              src="/images/profile.jpg"
              width={200}
              height={200}
              alt="Profile image"
              className="rounded-full"
            />
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-h3">Daniel Bílek</h3>
              <p className="text-secondary mb-5">Front end developer</p>
              <div className="flex gap-3 items-center">
                <ContactIcons />
              </div>
            </div>
          </aside>
          {/* PARAGRAPHS */}
          <div className="basis-2/3 flex flex-col gap-5">
            {data.map(({ paragraph }, i) => (
              <p key={i} className="text-secondary">
                {paragraph}
              </p>
            ))}
            <Button onClick={toggle}>
              <span>Contact me</span>
            </Button>
          </div>
        </div>
      </PageLayout>

      <Modal
        onClose={toggle}
        open={showModal}
        title="Contact me"
        description="You can also call me Monday to Friday 9AM - 8PM on +420 774 500 143"
      >
        <ContactMeForm />
      </Modal>
    </>
  );
};

export default AboutMe;
