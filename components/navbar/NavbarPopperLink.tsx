import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
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
      className="p-5 text-secondary rounded-lg transition ease-in-out hover:defaultTextColor flex items-start"
    >
      <li className={classNames(isActive && 'border-b-2 border-neutral-blue', 'w-fit')}>
        {link.title}
      </li>
      <ArrowUpRightIcon className="w-3 h-3" />
    </Link>
  );
};

export default NavbarPopperLink;
