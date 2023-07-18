import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface NavbarLinkProps {
  link: {
    href: string;
    title: string;
  };
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ link }) => {
  const { asPath } = useRouter();
  const isActive = asPath === link.href;

  return (
    <Link href={link.href} className="flex items-start text-secondary hover:defaultTextColor">
      <li className={classNames(isActive && 'border-b border-neutral-blue')}>{link.title}</li>
      <ArrowUpRightIcon className="w-3 h-3" />
    </Link>
  );
};

export default NavbarLink;
