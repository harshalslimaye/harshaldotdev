import Head from 'next/head';
import { BaseProps } from '../interfaces/props';
import Header from './header';
import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Script from 'next/script';
import { useRouter } from 'next/router';

interface LayoutProps extends BaseProps {
  title: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, description, title }) => {
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
    <div className="layout w-11/12 md:w-3/5">
      <Script
        id="prism"
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
        strategy="lazyOnload"
        onLoad={() => (window as any).Prism.highlightAll()}
      />
      <Head>
        <title>{title} | Harshal Limaye</title>
        <link rel="icon" href={'/images/favicon.ico'} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {description && (
          <meta
            name="description"
            content={description.replace(/<\/?[^>]+(>|$)/g, '')}
          />
        )}
      </Head>
      <Header />
      {/* <Navbar /> */}
      <div style={{
        minHeight: 'calc(100vh - 230px)'
      }}>{children}</div>
      <Footer />
    </div>
  );
};


export default Layout;
