import React, { useEffect, useRef } from 'react';

const UtterancesComments = () => {
  const ref = useRef();

  useEffect(() => {
    const script: any = document.createElement('script');

    const config = {
      src: 'https://utteranc.es/client.js',
      repo: 'harshalslimaye/comments',
      'issue-term': 'pathname',
      theme: 'github-dark',
      crossOrigin: 'anonymous',
      defer: true
    }; 

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, `${value}`);
    });

    setTimeout(() => {
      if (ref && ref.current) {
        (ref.current as any).append(script);
      }
    }, 2000);
  }, []);

  return <div ref={ref} />;
};

export default UtterancesComments;