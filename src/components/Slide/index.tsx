import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/models/content';

interface Props {
  contents: Content[];
}

const Slide: React.FC<Props> = (props) => {
  const items = props.contents;

  return (
    <div
      className={cn(
        'items-end justify-between',
        'flex flex-col h-full space-y-[var(--s-md)]'
      )}
    >
      {items.map((content) => (
        <div
          key={`${content.slug}`}
          className={cn('flex flex-row items-end justify-end w-full')}
        >
          <Link
            href={JSON.parse(JSON.stringify(content.metadata)).url}
            target="_blank"
            className={cn(
              'backdrop-contrast-75',
              // 'backdrop-invert-0',
              'md:break-all',
              'font-[800]',
              'text-xl md:text-5xl lg:text-7xl text-[var(--base-body)] active:text-[var(--accent)] hover:text-[var(--accent)]',
              'transform-all duration-75 ease-in-out',
              'translate-x-[calc(100vw-var(--s-xl))] sm:translate-x-[calc(100vw/2.5)]',
              'uppercase',
              'z-40',
              'italic',
              'max-w-[calc(100vw-var(--s-xl))] sm:max-w-[calc(100vw/2.5)]'
            )}
          >
            {`${content.title}(${
              JSON.parse(JSON.stringify(content.metadata)).year
            })`}
          </Link>
          <Link
            href={JSON.parse(JSON.stringify(content.metadata)).url}
            target="_blank"
            className={cn('z-30')}
          >
            <Image
              className={cn(
                'aspect-square',
                'w-[calc(100vw-var(--s-xl))] sm:w-[calc(100vw/2.5)] lg:w-[25rem]',
                'min-w-[calc(100vw-var(--s-xl))] sm:min-w-[calc(100vw/2.5)]',
                'object-contain'
              )}
              src={content.previewImgUrl}
              alt={content.title}
              width={800}
              height={800}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Slide;
