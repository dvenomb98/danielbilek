import classNames from 'classnames';
import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const layoutClasses = 'container mx-auto px-8 lg:px-16';

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={classNames(layoutClasses, 'py-16 flex flex-col gap-16 min-h-screen', className)}
    >
      {children}
    </main>
  );
};

export default PageLayout;
