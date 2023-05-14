import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import theme from '@/styles/theme.module.css';
import { mobile, desktop } from '@/styles/layouts';
import AppBar from '@/components/AppBar';
import SideBar from '@/components/SideBar';
import Page from '@/components/Page';

const SITE_URL = process.env.SITE_URL;

interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
  classes?: cn.ArgumentArray;
}

interface Props {
  meta?: PageMeta;
  classes?: cn.ArgumentArray;
}

interface WrapperProps {
  path: string;
  classes?: cn.ArgumentArray;
}

const LayoutWrapper: React.FunctionComponent<
  React.PropsWithChildren & WrapperProps
> = (props) => {
  const { children, classes, path } = props;
  const [activePage, setActivePage] = useState<string>('home');
  const [isMobile, setIsMobile] = useState<boolean | undefined>();

  useEffect(() => {
    const saveToSession = (isMobile: boolean) => {
      sessionStorage.setItem('isMobile', `${isMobile}`);
      setIsMobile(isMobile);
    };
    window.addEventListener('resize', () =>
      saveToSession(window.innerWidth < 768)
    );
    return () => {
      window.removeEventListener('resize', () =>
        saveToSession(window.innerWidth < 768)
      );
    };
  }, []);

  useEffect(() => {
    if (path === '' || path === '/') {
      setActivePage('home');
    } else {
      const pathSplit = (path.startsWith('/') ? path.slice(1) : path).split(
        '/'
      );
      setActivePage(pathSplit[0]);
    }
  }, [path]);

  return (
    <>
      <div
        className={cn(
          `${theme.theme}`,
          `${isMobile ? mobile : desktop}`,
          'block',
          'm-0',
          'relative'
        )}
      >
        {activePage && <AppBar activePage={activePage} />}
        <SideBar isMain={path === '/'} />
        <main
          className={cn(
            'bg-[var(--bg-color)]',
            'flex flex-col',
            'items-center justify-center',
            'w-full',
            'translate-x-0',
            classes
          )}
        >
          <Page name={activePage}>{children}</Page>
        </main>
      </div>
    </>
  );
};

const Layout: React.FunctionComponent<React.PropsWithChildren & Props> = (
  props
) => {
  const { children, meta: pageMeta, classes } = props;
  const router = useRouter();

  const meta = {
    title: 'Jenny Jung',
    description: 'Software Engineer, portfolio (2023)',
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
      <LayoutWrapper path={router.pathname} classes={classes}>
        {children}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
