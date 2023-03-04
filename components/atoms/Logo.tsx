import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col font-bold text-h1 leading-[1.75rem]">
      <p className="">DA</p>

      <p className="flex">
        <span>NIEL</span>
        <span className="text-neutral-blue">.</span>
      </p>
    </div>
  );
};

export default Logo;
