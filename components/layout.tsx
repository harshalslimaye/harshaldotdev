import Head from 'next/head';
import { BaseProps } from '../interfaces/props';
import Header from './header';
import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Script from 'next/script';
import { useRouter } from 'next/router';

interface LayoutProps extends BaseProps {
  title: String;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (url.indexOf('/category/') === -1 && url !== '/') {
        (window as any).Prism.highlightAll();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <div className="layout w-4/5 md:w-3/5">
      <Script
        id="prism"
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
        strategy="lazyOnload"
        onLoad={() => (window as any).Prism.highlightAll()}
      />
      <Head>
        <title>{title} | Harshal Limaye</title>
      </Head>
      
      <Header />
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
