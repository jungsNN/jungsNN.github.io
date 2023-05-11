import type { AppProps } from 'next/app';
import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AppBar from '@/components/AppBar';
import SideBar from '@/components/SideBar';
import theme from '@/styles/theme.module.css';
import styles from '@/styles/App.module.css';
import '@/styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={cn(theme.theme,styles.app)}>
      <Head>
        <title>Jenny Jung</title>
        <meta content="portfolio" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <AppBar />
      <SideBar isMain={router.pathname === '/'} />
      <main className={cn('bg-[var(--bg-color)]', styles.main,)}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
