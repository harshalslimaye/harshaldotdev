import Link from 'next/link';
import React from 'react';
import Prompt from './prompt';

const Header: React.FC<{}> = () => {
  return (
    <div className="header">
      <div className="flex logo">
        <Prompt />
        <span className="ml-2.5">
          <Link href={'/'}>
            <a className="site-title leading-10 md:leading-4">Harshal Limaye</a>
          </Link>
        </span>
      </div>
      <small className="mt-1">
        JavaScript Enthusiast | Software Developer | Open Source Contributor |
        Technical Speaker
      </small>
    </div>
  );
};

export default Header;
