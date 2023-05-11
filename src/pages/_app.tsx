import type { AppProps } from 'next/app';
import { Layout } from '@/components/Foundations';
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
