import cn from 'classnames';
import styles from './index.module.css';

interface SideBarProps {
  isMain?: boolean | undefined;
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {
  const isMain = props.isMain;

  return (
    <div
      className={cn(
        'flex',
        'fixed top-0',
        'h-[calc(100vw*(128*2560))] sm:h-[100%]',
        'items-start justify-center',
        'w-[calc(100vw*(256/2560))]',
        'z-20'
      )}
    >
      <div className={cn('relative')}>
        {isMain ? (
          <h1
            className={cn(
              styles.bannerTitle,
              'text-[var(--base-body-inverted)]',
              'text-[calc(100vw*(128/2560))] xl:text-[4rem]'
            )}
          >
            Jenny Jung
          </h1>
        ) : (
          <div
            className={cn(
              'grid grid-cols-[repeat(2,1fr)]',
              'items-center justify-between'
            )}
          >
            <h2
              className={cn(
                styles.bannerTitle,
                'text-[var(--secondary)]',
                'text-[calc(100vw*(64/2560))] sm:text-[calc(100vw*(72/2560))]'
              )}
            >
              Jenny Jung
            </h2>
            <h4
              className={cn(
                styles.bannerTitle,
                'text-[var(--base-body)]',
                'text-[calc(100vw*(32/2560))] sm:text-[calc(100vw*(48/2560))]'
              )}
            >
              Software Engineer
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
