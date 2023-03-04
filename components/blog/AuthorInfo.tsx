import Image from 'next/image';
import React from 'react';

interface AuthorInfoProps {
  author: string;
}

const AuthorInfo: React.FC<AuthorInfoProps> = ({ author }) => {
  return (
    <div className="flex gap-2 items-center">
      <Image
        src="/images/profile.jpg"
        width={50}
        height={50}
        alt="Profile image"
        className="rounded-full"
      />
      <p className="font-bold">{author}</p>
    </div>
  );
};

export default AuthorInfo;
