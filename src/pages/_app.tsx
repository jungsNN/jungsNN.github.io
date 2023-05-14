import type { AppProps } from 'next/app';
import { Layout } from '@/components/Foundations';
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout classes={['font-body']}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
