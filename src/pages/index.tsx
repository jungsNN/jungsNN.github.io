import cn from 'classnames';
import type { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import Slide from '@/components/Slide';
import { projectContents } from 'constants/projects';
import { KEYWORD_GROUPS } from 'constants/about';

const Home: NextPage = () => {
  const contentsFromLatest = projectContents
    .map((content) => ({
      id: projectContents.length - JSON.parse(JSON.stringify(content)).id,
      ...content,
    }))
    .reverse();

  const [isMobile, setIsMobile] = useState<boolean | undefined>();

  // would be ideal to create a context store to avoid redundancy
  const saveToSession = useCallback(
    (isMobile: boolean) => {
      setIsMobile(isMobile);
    },
    [setIsMobile]
  );

  useEffect(() => {
    saveToSession(window.innerWidth < 768);

    window.addEventListener('resize', () =>
      saveToSession(window.innerWidth < 768)
    );
    return () => {
      window.removeEventListener('resize', () =>
        saveToSession(window.innerWidth < 768)
      );
    };
  }, [saveToSession]);

  return (
    <>
      <div
        className={cn(
          'self-center',
          'pl-[var(--s-256)]',
          'mt-[var(--s-md)] mr-[var(--s-256)]',
          'z-30'
        )}
      >
        <div
          className={cn(
            'font-[600]',
            'px-[var(--s-xs)] pt-[var(--s-md)] sm:pt-[var(--s-lg)]',
            'w-full max-w-[31.5rem]',
            'lowercase',
            'text-center',
            'italic'
          )}
        >
          {KEYWORD_GROUPS.map((group) =>
            group.keywords.map((keyword) => (
              <span
                id={group.label}
                key={`group-${group.id}_keyword-${keyword.id}`}
                className={cn('mr-[var(--s-xs)]', 'inline-block', {
                  'text-[var(--hot-pink)]':
                    group.id > 1 ? group.id % 2 !== 0 : group.id === 1,
                })}
              >
                {keyword.text}
              </span>
            ))
          )}
        </div>
      </div>
      <Slide contents={contentsFromLatest} isMobile={isMobile ?? false} />
    </>
  );
};

export default Home;
