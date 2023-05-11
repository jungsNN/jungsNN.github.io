import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import theme from '@/styles/theme.module.css';
import { mobile, desktop } from '@/styles/layouts';
import AppBar from '@/components/AppBar';
import SideBar from '@/components/SideBar';

const SITE_URL = process.env.SITE_URL;

interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

interface Props {
  children: React.ReactNode;
  meta?: PageMeta;
}

const LayoutWrapper = ({
  children,
  path = '/',
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setIsMobile(window.innerWidth < 480)
    );
    return () => {
      window.removeEventListener('resize', () =>
        setIsMobile(window.innerWidth < 480)
      );
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          `${theme.theme}`,
          `${isMobile ? mobile : desktop}`,
          'block',
          'm-0'
        )}
      >
        <AppBar />
        <SideBar isMain={path === '/'} />
        <main
          className={cn(
            'bg-[var(--bg-color)]',
            'flex flex-col',
            'items-center justify-center',
            'w-full',
            'translate-x-0'
          )}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default function Layout({ children, meta: pageMeta }: Props) {
  const router = useRouter();

  const meta = {
    title: 'Jenny Jung',
    description: 'Software Engineer, Portfolio 2023',
    cardImage: '',
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${SITE_URL}${router.asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
      </Head>
      <LayoutWrapper path={router.pathname}>{children}</LayoutWrapper>
    </>
  );
}
