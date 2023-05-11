import cn from 'classnames';
import type { NextPage } from 'next';
import Page from '@/components/Page';
import Slide from '@/components/Slide';
import { projectContents } from 'constants/projects';

const Home: NextPage = () => {
  const contentsFromLatest = projectContents
    .map((content) => ({
      id: projectContents.length - JSON.parse(JSON.stringify(content)).id,
      ...content,
    }))
    .reverse();
  return (
    <Page name="home">
      <div className={cn('w-full', 'pl-[var(--s-256)]', 'mt-[var(--s-md)]')}>
        <div
          className={cn(
            'flex flex-col h-full items-end justify-end text-end',
            'border-2 border-[var(--accent)]',
            'font-bold',
            'px-[var(--s-xs)] pb-[var(--s-xs)] pt-[var(--s-md)]',
            'w-[17.5rem]',
            'z-50',
            'lowercase'
          )}
        >
          <span className={cn()}>
            Software Engineer • Philadelphia • B.A. Psychology / Cognitive
            Neuroscience, Temple University
          </span>
        </div>
      </div>
      <div
        className={cn(
          'mt-[var(--s-lg)] lg:mt-0',
          'sm:absolute right-0 top-0 bottom-0',
          'scroll-smooth',
          'overflow-y-auto overflow-x-hidden',
          'w-full'
        )}
      >
        <Slide contents={contentsFromLatest} />
      </div>
    </Page>
  );
};

export default Home;
