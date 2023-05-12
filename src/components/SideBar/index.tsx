import cn from 'classnames';
import styles from './index.module.css';
import Link from 'next/link';

interface SideBarProps {
  isMain?: boolean | undefined;
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {
  const isMain = props.isMain;

  const titleStyle = cn(
    styles.bannerTitle,
    'transform-all duration-75 ease-in',
    {
      'text-[var(--base-body-inverted)] text-[calc(100vw*(128/2560))] xl:text-[4rem]':
        isMain,
      'text-[var(--accent)] text-2xl xl:text-3xl transform:translate-y-[-100%]':
        !isMain,
    }
  );
  return (
    <div
      className={cn(
        'flex',
        'fixed top-0',
        'items-start',
        'transform-all duration-75 ease-in',
        'w-[calc(100vw*(256/2560))]',
        'z-10',
        {
          'h-[calc(100vw*(128*2560))] sm:h-[100%] justify-center': isMain,
          'justify-end left-[var(--s-lg)]': !isMain,
        }
      )}
    >
      <div className={cn('relative')}>
        <Link href="/">
          {isMain ? (
            <h1
              className={titleStyle}
              style={{
                transform: 'rotate(-90deg) translateX(-50%)',
              }}
            >
              Jenny Jung
            </h1>
          ) : (
            <h1
              className={titleStyle}
              style={{
                transform: 'rotate(-90deg) translateX(-55%)',
              }}
            >
              Jenny Jung
            </h1>
          )}
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
