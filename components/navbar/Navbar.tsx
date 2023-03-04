import useMobileWidth from '@/hooks/useMobile';
import classNames from 'classnames';
import React from 'react';
import Logo from '../atoms/Logo';
import ThemeSwitcher from '../atoms/ThemeSwitcher';
import { layoutClasses } from '../layouts/PageLayout';
import data from './data';
import NavbarLink from './NavbarLink';
import NavbarPopper from './NavbarPopper';

const Navbar: React.FC = () => {
  const { isMobile } = useMobileWidth();

  return (
    <nav className={classNames(layoutClasses, 'py-8 flex justify-between items-center')}>
      <Logo />

      {isMobile ? (
        <div className="flex gap-5">
          <ThemeSwitcher />
          <NavbarPopper />
        </div>
      ) : (
        <div className="flex gap-10 items-center">
          <ul className="flex gap-10">
            {data.map((link) => (
              <NavbarLink key={link.href} link={link} />
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
