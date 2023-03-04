import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavbarPopperLinkProps {
  link: {
    href: string;
    title: string;
  };
  onClick: () => void;
}

const NavbarPopperLink: React.FC<NavbarPopperLinkProps> = ({ link, onClick }) => {
  const { asPath } = useRouter();
  const isActive = asPath === link.href;

  return (
    <Link
      href={link.href}
      onClick={onClick}
      className="p-5 hover:bg-light-secondary-background dark:hover:bg-dark-primary-background/50 rounded-sm transition ease-in-out"
    >
      <li className={classNames(isActive && 'border-b-2 border-neutral-blue', 'w-fit')}>
        {link.title}
      </li>
    </Link>
  );
};

export default NavbarPopperLink;
