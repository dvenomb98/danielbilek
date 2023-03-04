import classNames from 'classnames';
import React, { FC } from 'react';
import ContactIcons from '../atoms/Contacticons';
import { layoutClasses } from '../layouts/PageLayout';

const Footer: FC = () => {
  return (
    <footer className={classNames(layoutClasses, 'py-10 flex flex-col gap-5')}>
      {/* LOGOS */}
      <div className="flex gap-3 items-center justify-center">
        <ContactIcons />
      </div>
      {/* TEXT */}
      <div className="flex items-center justify-center">
        <p className="text-secondary">Daniel Bílek • © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
