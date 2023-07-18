import React from 'react';
import classNames from 'classnames';
import Loader from './Loader';
import Link from 'next/link';

export enum ButtonVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonSizes {
  SMALL = 'small',
  BIG = 'big',
}

export enum ButtonWidth {
  FULL = 'full',
  DEFAULT = 'default',
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: `${ButtonVariants}`;
  size?: `${ButtonSizes}`;
  width?: `${ButtonWidth}`;
  loading?: boolean;
}

const baseClasses = {
  [ButtonVariants.PRIMARY]:
    'dark:bg-light-primary-background bg-dark-primary-background border-none  text-dark-text-primary dark:text-light-text-primary dark:hover:bg-light-secondary-background hover:bg-dark-secondary-background ',
  [ButtonVariants.SECONDARY]:
    'dark:bg-dark-secondary-background hover:dark:bg-dark-primary-background borderDefaultColor border bg-light-primary-background hover:bg-light-secondary-background',
};

const heightClasses = {
  [ButtonSizes.SMALL]: 'h-8',
  [ButtonSizes.BIG]: 'h-12',
};

const widthClasses = {
  [ButtonWidth.FULL]: 'w-full',
  [ButtonWidth.DEFAULT]: 'w-48 min-w-fit',
};

const getClasses = (
  variant: `${ButtonVariants}`,
  disabled: boolean,
  size: `${ButtonSizes}`,
  className: string,
  width: `${ButtonWidth}`,
) =>
  classNames(
    'px-5 rounded-lg focus:outline-none focus:ring hover:shadow-md transition ease-in-out font-semibold',
    baseClasses[variant],
    heightClasses[size],
    widthClasses[width],
    disabled && 'cursor-default pointer-events-none opacity-80',
    className,
  );

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.BIG,
  type = 'button',
  width = ButtonWidth.DEFAULT,
  disabled = false,
  loading,
  onClick,
  ...props
}) => (
  <button
    className={getClasses(variant, disabled, size, className, width)}
    // eslint-disable-next-line react/button-has-type
    type={type}
    disabled={disabled}
    onClick={onClick}
    {...props}
  >
    {loading ? <Loader /> : children}
  </button>
);

interface ButtonLinkProps extends ButtonProps {
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  className = '',
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.BIG,
  type = 'button',
  width = ButtonWidth.DEFAULT,
  disabled = false,
  loading,
  onClick,
  href,
  ...props
}) => (
  <Link href={href} passHref>
    <button
      className={getClasses(variant, disabled, size, className, width)}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {loading ? <Loader /> : children}
    </button>
  </Link>
);
