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
    <Link href={link.href}>
      <li className={classNames(isActive && 'border-b-2 border-neutral-blue')}>{link.title}</li>
    </Link>
  );
};

export default NavbarLink;
