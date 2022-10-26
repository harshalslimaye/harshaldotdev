import Link from 'next/link';
import React from 'react';
import Prompt from './prompt';

const Header: React.FC<{}> = () => {
  return (
    <div className="mt-10">
      <h1 className="flex">
        <Prompt />
        <span className="ml-2.5">
          <Link href={'/'}>
            <a className="site-title">Harshal Limaye</a>
          </Link>
        </span>
      </h1>
      <small className="mt-1">
        JavaScript Enthusiast | Software Developer | Open Source Contributor |
        Technical Speaker
      </small>
    </div>
  );
};

export default Header;
