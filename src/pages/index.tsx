import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import cn from 'classnames';
import { CyberCard as FeatureCard } from '@/components/Themed';
import { mockContents } from '@/models/mocks/contents';
import Page from '@/components/Page';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const ABOUT_PATH = '/?pg=about';
const HOME_PATH = '/';
const MOCK_FEATURE_CONTENT = mockContents[0];

const Home: NextPage = () => {
  const router = useRouter();
  // const [scrollY, setScrollY] = useState<number | undefined>();

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    // setScrollY(window.pageYOffset);
    const pg = router.query.pg as string;
    if (!scrollY) {
      return;
    }

    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    // console.log({ path, pg });

    if (scrollY >= 255) {
      if (pg === 'about') {
        return;
      }
      router.query.pg = ABOUT_PATH;
      router.push(ABOUT_PATH, undefined, { shallow: true });
    } else {
      if (!pg || pg === '') {
        return;
      }
      router.query.pg = HOME_PATH;
      router.push(HOME_PATH, undefined, { shallow: true });
    }
  }, [router.query.pg]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Page name="home">
      <div className={cn(styles.feature)}>
        <div>HELLO</div>
        <FeatureCard
          content={MOCK_FEATURE_CONTENT}
          key="feature-card"
          variant="text"
        />
      </div>
      <div
        className={cn(
          'absolute',
          'bottom-0',
          'h-[200px]',
          'w-full',
          'bg-[#000000]'
        )}
      >
        <Link href="/?pg=2">Portfolio</Link>
      </div>
    </Page>
  );
};

export default Home;
