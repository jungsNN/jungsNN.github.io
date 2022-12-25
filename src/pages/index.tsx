import cn from 'classnames';
import Link from 'next/link';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CyberCard as FeatureCard } from '@/components/Themed';
import { mockContents } from '@/models/mocks/contents';
import Page from '@/components/Page';
import styles from '@/styles/Home.module.css';

const ABOUT_PATH = '/?pg=about';
const HOME_PATH = '';
const MOCK_FEATURE_CONTENT = mockContents[0];

const Home: NextPage = () => {
  const initialViewRef = useRef<HTMLDivElement>(null);
  const aboutViewRef = useRef<HTMLDivElement>(null);
  const [y, setY] = useState<number>(0);
  const [scrollTimeout, setScrollTimeout] = useState<
    NodeJS.Timeout | undefined
  >();
  const [scrollingDir, setScrollingDir] = useState<'down' | 'up' | undefined>();
  const router = useRouter();

  const onChangeView = useCallback(() => {
    if (!initialViewRef?.current) {
      return;
    }
    let newRoute: string | undefined = undefined;
    const aboutViewTop = initialViewRef.current.getBoundingClientRect().bottom;
    if (y >= aboutViewTop) {
      newRoute = ABOUT_PATH;
    } else {
      newRoute = HOME_PATH;
    }
    router.push(newRoute ?? '/', undefined, { shallow: true });
  }, [initialViewRef?.current, router.query.pg, y]);

  useEffect(() => {
    onChangeView();
  }, [onChangeView]);

  const onScroll = useCallback(
    (e: Event) => {
      const win = e.currentTarget;
      if (win instanceof Window) {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        const timeout = setTimeout(() => {
          setScrollTimeout(undefined);
          setScrollingDir(undefined);
        }, 200);
        setScrollTimeout(timeout);
        setScrollingDir(
          y > win.scrollY ? 'up' : y === win.scrollY ? undefined : 'down'
        );
        setY(win.scrollY);
      }
    },
    [setScrollingDir, scrollTimeout, setY]
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <Page name="home">
      <div className={cn(styles.feature)} ref={initialViewRef}>
        <div />
        <FeatureCard content={MOCK_FEATURE_CONTENT} key="feature-card" />
      </div>
      <div
        className={cn(
          styles.scrollTx,
          'bottom-0',
          {
            'h-[32vh]': router.query.pg !== 'about',
            'h-[72vh]': router.query.pg === 'about',
          },
          scrollingDir === 'down'
            ? styles._down
            : scrollingDir === 'up'
            ? styles._up
            : styles._inactive
        )}
        ref={aboutViewRef}
      >
        <Link href="/?pg=2"></Link>
        <FeatureCard
          className={cn(
            {
              'h-[32vh]': router.query.pg !== 'about',
              'h-[72vh]': router.query.pg === 'about',
            },
            styles._content
          )}
          content="Player 1"
          header="Player 1"
          key="about-card"
        />
      </div>
    </Page>
  );
};

export default Home;
