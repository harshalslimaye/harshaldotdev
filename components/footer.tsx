import React from 'react';
import Image from 'next/image';

const Footer: React.FC<{}> = () => {
  const images = [
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/harshal-limaye/' },
    { name: 'Twitter', url: 'https://twitter.com/harshalslimaye' },
    { name: 'Github', url: 'https://github.com/harshalslimaye' },
    { name: 'Email', url: 'mailto:harshal.limaye@outlook.com' },
  ];
  return (
    <div className="footer">
      <div className="flex-1">Designed & developed by Harshal Limaye</div>
      <div className="flex-1 text-right">
        {images.map((img) => (
          <a key={img.name} className="mx-1" href={img.url} target="_blank">
            <Image
              src={`/images/${img.name.toLowerCase()}.svg`}
              height={24}
              width={24}
              alt={`Connect to Harshal Limaye on ${img.name}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
