import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/models/content';
import cvEntries from '@/models/cvEntries';

interface Props {
  contents: Content[];
  isMobile: boolean;
}

/** below 768px */
const defaultLayout = cn(
  'md:break-words',
  'md:text-[1.5rem]',
  'text-end',
  'md:text-[var(--base-body)]'
);
const desktopImgStyle = cn('object-contain', 'z-30');

const Slide: React.FC<Props> = (props) => {
  const items = props.contents;
  const { isMobile } = props;

  return (
    <div
      className={cn(
        'mt-[var(--s-md)] mb-[var(--s-lg)]',
        'flex flex-col items-center justify-between'
      )}
    >
      <div className="text-sm text-center text-[var(--body-300)] font-[600] mx-[var(--s-sm)] translate-y-[var(--s)] sm:translate-y-[var(--s-lg)] md:hidden">
        {`(Tap preview images to visit the site or read a summary)`}
      </div>
      {items.map((content) => {
        const metadata = JSON.parse(JSON.stringify(content.metadata));
        const url = metadata.url;
        const isExternal = url.startsWith('http');
        const cvData = cvEntries.find((cv) => cv.name === content.title);

        return (
          <div key={`${content.slug}`} className={cn('mb-[var(--s-lg)]')}>
            <Link
              href={url}
              target={isExternal ? '_blank' : undefined}
              className={cn(
                'invisible md:visible',
                'italic underline uppercase',
                'text-base-body focus:text-[var(--blue)] focus-visited:text-[var(--blue)] hover:text-[var(--blue)]',
                'transform-all duration-75 ease-in-out',
                'z-40',
                defaultLayout
              )}
            >
              <p className="inline">{`${content.title}`}</p>
              <p className="inline">{`(${metadata.year})`}</p>
            </Link>
            <div className="group block relative">
              <Image
                className={cn(desktopImgStyle)}
                src={content.previewImgUrl}
                alt={content.title}
                width={isMobile ? 400 : 500}
                height={isMobile ? 400 : 500}
                unoptimized={content.title === 'Cybershrooms'}
              />
              <div
                className={cn(
                  'absolute left-0 top-0',
                  'bg-[var(--base-body)] opacity-80',
                  'flex h-full w-full',
                  'md:text-lg lg:text-2xl text-[var(--base-body-inverted)]',
                  'invisible group-focus:visible group-active:visible group-hover:visible',
                  'transform-all duration-100 ease-in-out'
                )}
              >
                <div className="flex flex-col w-full justify-center items-center space-y-[var(--s)]">
                  <div className={cn('mb-[var(--s)]', { hidden: !isMobile })}>
                    <span className="font-extrabold">{content.title}</span>
                  </div>
                  <div className="flex flex-row items-center justify-around w-full">
                    {isExternal && (
                      <Link href={url} target="_blank">
                        <span>{url}</span>
                      </Link>
                    )}

                    {cvData && (
                      <Link href={`/cv/${cvData.slug}`}>
                        <span className={cn({})}>{'Read Summary'}</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="block h-[10rem] w-full">
        <span> </span>
      </div>
    </div>
  );
};

export default Slide;
