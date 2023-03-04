import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import React from 'react';

const iconClasses = 'w-8 h-8 lg:w-6 lg:h-6 fill-light-text dark:fill-dark-text';
const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();

  const handleToggle = () => (theme === 'dark' ? setTheme('light') : setTheme('dark'));

  return (
    <>
      {theme === 'dark' ? (
        <SunIcon role="button" tabIndex={0} className={iconClasses} onClick={handleToggle} />
      ) : (
        <MoonIcon role="button" tabIndex={0} className={iconClasses} onClick={handleToggle} />
      )}
    </>
  );
};

export default ThemeSwitcher;
