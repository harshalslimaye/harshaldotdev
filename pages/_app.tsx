import { AppProps } from 'next/app';
import Script from 'next/script';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
import '../styles/index.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-xxxxxxxxxx"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.ANALYTICS_ID});
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
