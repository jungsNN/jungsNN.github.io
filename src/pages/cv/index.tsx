import cn from 'classnames';
import Link from 'next/link';
import { Button } from '@/components/Foundations';
import CVLayout from '@/components/CVLayout';
import cvEntries from '@/models/cvEntries';

const CVMain = () => {
  return (
    <div
      className={cn(
        'flex flex-col w-full items-center',
        'overflow-y-auto',
        'overflow-x-hidden'
      )}
    >
      <div
        className={cn(
          'flex justify-end w-full translate-y-[var(--s-md)] relative z-40 pr-[var(--s)] md:pr-[var(--s-md)]'
        )}
      >
        <Link href="/">
          <Button variant="sm">exit</Button>
        </Link>
      </div>
      <div className={cn('snap-normal snap-y', 'scroll-smooth', 'z-30')}>
        {cvEntries.map((c) => {
          return (
            <div key={c.slug} className={cn('snap-always snap-center')}>
              <CVLayout cvData={c} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CVMain;
