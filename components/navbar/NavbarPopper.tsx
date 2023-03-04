import { Popover } from '@headlessui/react';
import React from 'react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import data from './data';
import NavbarPopperLink from './NavbarPopperLink';

const NavbarPopper: React.FC = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="focusable">
        <Bars3CenterLeftIcon className="w-8 h-8" />
      </Popover.Button>
      <Popover.Overlay className="overlay" />
      <Popover.Panel className="absolute right-0 bg-light-primary-background dark:bg-dark-secondary-background z-50 rounded-sm w-72">
        {({ close }) => (
          <ul className="flex flex-col">
            {data.map((link) => (
              <NavbarPopperLink key={link.href} onClick={() => close()} link={link} />
            ))}
          </ul>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default NavbarPopper;
