import { AppProps } from 'next/app';
import React from 'react';
import 'prismjs/themes/prism-okaidia.css';
import '../styles/index.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
