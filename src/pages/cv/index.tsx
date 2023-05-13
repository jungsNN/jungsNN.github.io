import cn from 'classnames';
import Link from 'next/link';
import { Button } from '@/components/Foundations';
import CVLayout from '@/components/CVLayout';
import cvEntries from '@/models/cvEntries';

const CVMain = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end w-full translate-y-[var(--s-lg)] relative z-20">
        <Link href="/">
          <Button variant="sm">exit</Button>
        </Link>
      </div>
      <div
        className={cn(
          'snap-y snap-mandatory',
          'scroll-smooth',
          'overflow-x-hidden',
          'sticky',
          'z-10'
        )}
      >
        {cvEntries.map((c) => {
          return (
            <div key={c.slug} className={cn('sticky')}>
              <CVLayout cvData={c} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CVMain;
