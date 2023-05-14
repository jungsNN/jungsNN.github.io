import cn from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { CloseIcon, MenuIcon } from '@/components/svgs';
import styles from './index.module.css';
import Menu from '../Menu';

interface AppBarProps {
  activePage: string;
  showLogo?: boolean;
  showMenuText?: boolean;
}

const AppBar: React.FunctionComponent<AppBarProps> = (props) => {
  const { activePage, showLogo, showMenuText } = props;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenuItem = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 100);
  };

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
        {/* <div
          className={cn(
            'flex flex-row',
            'items-center justify-end',
            'h-[4.375rem]',
            'order-1',
            'collapse'
          )}
        >
          <div
            className={cn(['justify-self-center', styles.hamburger])}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={cn([styles.menuIcon, styles._2])}>
              {!isMenuOpen && (
                <MenuIcon
                  className={cn([styles.open])}
                  color="var(--royal-blue)"
                />
              )}
              {isMenuOpen && (
                <CloseIcon
                  className={styles.remove}
                  color="var(--royal-blue)"
                />
              )}
            </div>
            {showMenuText && (
              <div className={cn(['display-block', styles.menuLabelWrapper])}>
                <div className="menu-label">
                  {isMenuOpen ? 'Close' : 'Menu'}
                </div>
                <div className="menu-label">Close</div>
              </div>
            )}
          </div>
        </div> */}
      </div>
      {/* <Menu isOpen={isMenuOpen} onClose={toggleMenuItem} /> */}
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
        // 'text-xs xs:text-md sm:text-lg',
        // 'font-[700]',
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
