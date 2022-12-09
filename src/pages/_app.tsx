import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import cn from 'classnames';
import AppBar from '@/components/AppBar';
import Background from '@/components/Background';
import SideBar from '@/components/SideBar';
import styles from '@/styles/App.module.css';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Archetype by Jung</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={cn(['bg-background text-info', styles.main])}>
        <AppBar />
        <Background />
        <div
          className={cn(
            'w-screen',
            'grid gap-[calc(100vw *(168 / 2560))] grid-flow-col',
            'justify-start'
          )}
        >
          <SideBar isMain />
          <div className={styles.page}>
            <Component {...pageProps} />
          </div>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                alt="Vercel Logo"
                height={16}
                src="/vercel.svg"
                width={72}
              />
            </span>
          </a>
        </footer>
      </main>
    </div>
  );
}

export default MyApp;
