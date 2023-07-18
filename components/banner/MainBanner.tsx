import React, { FC } from 'react';
import { ButtonLink } from '../atoms/Button';

const MainBanner: FC = () => {
  return (
    <section className="flex flex-col items-center gap-10 text-center lg:py-20 bg-[url('/images/grid.png')] bg-center sm:bg-none bg-no-repeat">
      <h1 className="text-header sm:text-headerMobile font-[900] leading-tight animated-text">
        Shaping Digital Futures with Expert Front End Engineering
      </h1>
      <p className="text-h4  text-secondary">
        Utilizing modern coding standards and cutting-edge technologies, I develop efficient,
        robust, and accessible front end solutions, ensuring seamless user interactions and a solid
        digital foundation for your business.
      </p>
      <div className="flex gap-10 items-center justify-center sm:flex-col">
        <ButtonLink href="/projects" variant="primary">
          Projects
        </ButtonLink>
        <ButtonLink href="/about-me" variant="secondary">
          Contact me
        </ButtonLink>
      </div>
    </section>
  );
};

export default MainBanner;
