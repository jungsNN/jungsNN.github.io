import cn from 'classnames';
import type { NextPage } from 'next';
import Link from 'next/link';
import Page from '@/components/Page';
import Slide from '@/components/Slide';
import { projectContents } from 'constants/projects';

const KEYWORD_GROUPS = [
  {
    id: 0,
    label: 'current',
    keywords: [
      {
        id: 0,
        text: 'Software_Engineer',
      },
      {
        id: 1,
        text: 'New_York',
      },
      {
        id: 2,
        text: 'INTJ',
      },
    ],
  },
  {
    id: 1,
    label: 'studies',
    keywords: [
      {
        id: 0,
        text: 'Psychology_major',
      },
      {
        id: 1,
        text: 'Cognitive_Neuroscience_minor',
      },
      {
        id: 2,
        text: 'Temple_University',
      },
    ],
  },
  {
    id: 2,
    label: 'programming-languages',
    keywords: [
      {
        id: 0,
        text: 'JavaScript',
      },
      {
        id: 1,
        text: 'TypeScript',
      },
      {
        id: 2,
        text: 'Python',
      },
      {
        id: 3,
        text: 'HTML',
      },
    ],
  },
  {
    id: 3,
    label: 'frameworks-and-tools',
    keywords: [
      {
        id: 0,
        text: 'ReactJS',
      },
      {
        id: 1,
        text: 'NextJS',
      },
      {
        id: 2,
        text: 'ThreeJS',
      },
      {
        id: 3,
        text: 'Git',
      },
      {
        id: 4,
        text: 'Pandas',
      },
    ],
  },
  {
    id: 4,
    label: 'expertise',
    keywords: [
      {
        id: 0,
        text: 'frontend',
      },
      {
        id: 1,
        text: 'fullstack',
      },
      {
        id: 2,
        text: 'mobile_development',
      },
      {
        id: 3,
        text: 'web3',
      },
      {
        id: 4,
        text: 'data_science',
      },
      {
        id: 5,
        text: 'machine_learning',
      },
      {
        id: 6,
        text: 'human_research',
      },
    ],
  },
  {
    id: 5,
    label: 'attributes',
    keywords: [
      {
        id: 0,
        text: 'brutalism',
      },
      {
        id: 1,
        text: 'cyber',
      },
      {
        id: 2,
        text: 'dimensions',
      },
    ],
  },
];
const Home: NextPage = () => {
  const contentsFromLatest = projectContents
    .map((content) => ({
      id: projectContents.length - JSON.parse(JSON.stringify(content)).id,
      ...content,
    }))
    .reverse();

  return (
    <Page name="home">
      <div
        className={cn(
          'self-start',
          'pl-[var(--s-256)]',
          'mt-[var(--s-md)] mr-[var(--s-256)] md:mr-0',
          'z-30'
        )}
      >
        <div
          className={cn(
            'border-4 border-transparent',
            'font-bold',
            'px-[var(--s-xs)] pb-[var(--s-xs)] pt-[var(--s)]',
            'w-full sm:w-[17.5rem] lg:w-[27.5rem]',
            'lowercase',
            'text-end',
            'italic'
          )}
        >
          {KEYWORD_GROUPS.map((group) =>
            group.keywords.map((keyword) => (
              <span
                id={group.label}
                key={`group-${group.id}_keyword-${keyword.id}`}
                className={cn('mr-[var(--s-xs)]', 'inline-block', {
                  'text-[var(--accent)]':
                    group.id > 1 ? group.id % 2 !== 0 : group.id === 1,
                })}
              >
                {keyword.text}
              </span>
            ))
          )}
        </div>
        <div className={cn('grid grid-cols-2', 'w-full h-auto')}>
          <LinkBlock path="/cv" text="CV" />
          <LinkBlock path="/cv" text="CV" />
          <LinkBlock path="/cv" text="CV" />
          <LinkBlock path="/cv" text="CV" />
        </div>
      </div>
      <div
        className={cn(
          'mt-[var(--s)] md:mt-0',
          'sm:absolute right-0 top-0 bottom-0',
          'scroll-smooth',
          'md:overflow-y-auto md:overflow-x-hidden',
          'w-full',
          'z-20'
        )}
      >
        <Slide contents={contentsFromLatest} />
      </div>
    </Page>
  );
};

const LinkBlock = (props?: { path?: string; text?: string }) => {
  const { path, text } = props ?? {};
  if (path) {
    return (
      <div
        className={cn(
          'aspect-square',
          'flex items-center justify-center',
          'bg-[var(--orange)] hover:opacity-60',
          'p-[var(--s-sm)] md:p-[var(--s)]',
          'transform-all duration-75 ease-in-out'
        )}
      >
        <Link href={path}>
          <p className={cn('text-center text-3xl md:text-8xl font-[500]')}>
            {text}
          </p>
        </Link>
      </div>
    );
  }
  return (
    <div
      className={cn(
        'aspect-square',
        'flex items-center justify-center',
        'bg-[var(--base-body)]',
        'p-[var(--s-sm)] md:p-[var(--s)]',
        'transform-all duration-75 ease-in-out'
      )}
    >
      <p
        className={cn(
          'text-center text-3xl md:text-8xl text-[var(--base-body-inverted)] font-[500]'
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default Home;
