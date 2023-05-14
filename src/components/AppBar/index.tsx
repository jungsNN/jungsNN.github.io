import cn from 'classnames';
import Link from 'next/link';
import styles from './index.module.css';

interface AppBarProps {
  activePage: string;
  showLogo?: boolean;
  showMenuText?: boolean;
}

const AppBar: React.FunctionComponent<AppBarProps> = (props) => {
  const { activePage, showLogo } = props;

  return (
    <div
      className={cn(
        'fixed bottom-auto left-auto xs:left-[var(--s-256)] right-0 xs:right-auto top-[var(--s-sm)] sm:top-0',
        'z-80',
        'font-body-bold'
      )}
    >
      <div
        className={cn(
          'relative',
          'inline',
          'min-h-[var(--s-md)] sm:min-h-[var(--s)]',
          'z-20',
          'p-[var(--s-sm)_0%] sm:p-[var(--s)_5%]'
        )}
      >
        <div className="">
          <AppbarLink label="Hm." isActive={activePage === 'home'} url={`/`} />
          <AppbarLink label="Cv." isActive={activePage === 'cv'} url={`/cv`} />
          <AppbarLink label="Gh." url="https://github.com/jungsNN" />
          <AppbarLink label="Li." url="https://linkedin.com/in/jungsNN" />
          <AppbarLink label="Tw." url="https://twitter.com/jungsNN" />
        </div>
        <div className={styles.logoWrapper}>
          <div className={cn([styles.logo, 'max-w-full'])}>
            {showLogo ? <p>logo</p> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

const AppbarLink = ({
  label,
  url,
  isActive,
}: {
  label: string;
  url: string;
  isActive?: boolean;
}) => {
  const isExternal = url.startsWith('http');
  return (
    <Link
      className={cn(
        'navlink group inline-block mr-[var(--s-sm)] sm:mr-[var(--s)]'
      )}
      href={
        isExternal
          ? url
          : {
              pathname: url,
            }
      }
      target={isExternal ? '_blank' : undefined}
    >
      <p className="navlink">
        <span
          className={cn('transform-all duration-75 ease-in-out', {
            'text-[var(--base-body)] group-hover:text-[var(--btn-base)] group-focus:text-[var(--btn-base)]':
              !isActive,
            'text-[var(--btn-base)] ': isActive,
          })}
        >
          {'//'}
        </span>
        <span
          className={cn('transform-all duration-75 ease-in-out', {
            'text-[var(--btn-base)]': isActive,
            'text-[var(--base-body)]': !isActive,
          })}
        >
          {label}
        </span>
      </p>
    </Link>
  );
};
export default AppBar;
