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
      'opacity-50 text-[var(--base-body-inverted)] text-[calc(100vw*(256/2560))] xs:text-[calc(100vw*(128/2560))]':
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
        'h-[100%] justify-center'
      )}
    >
      <div className={cn('relative')}>
        <Link
          href={{
            pathname: '',
          }}
        >
          <h1
            className={titleStyle}
            style={{
              transform: 'rotate(-90deg) translateX(-55%)',
            }}
          >
            Jenny Jung
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
