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
        'fixed bottom-auto left-0 right-0 top-0',
        'pl-[var(--s-256)]',
        'z-80'
      )}
    >
      <div
        className={cn(
          'relative',
          'flex flex-row',
          'items-center justify-between',
          'min-h-[var(--s-lg)] sm:min-h-[var(--s)]',
          'p-[var(--s)_5%] sm:p-[var(--s)_5%]',
          'z-20'
        )}
      >
        <div className="text-lg sm:text-base">
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
        <div
          className={cn(
            'flex flex-row',
            'items-center justify-end',
            'h-[4.375rem]',
            'order-1',
            'hidden'
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
        </div>
      </div>
      <Menu isOpen={isMenuOpen} onClose={toggleMenuItem} />
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
        'group inline-block mr-[var(--s)] md:mr-[var(--s)]',
        'text-sm sm:text-base'
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
      <span
        className={cn('font-[800]', 'transform-all duration-75 ease-in-out', {
          'text-[var(--base-body)] group-hover:text-[var(--base-body-inverted)] group-focus:text-[var(--base-body-inverted)]':
            !isActive,
          'text-[var(--base-body-inverted)] ': isActive,
        })}
      >
        {'//'}
      </span>
      <span
        className={cn('font-[800]', 'transform-all duration-75 ease-in-out', {
          'text-[var(--base-body-inverted)]': isActive,
          'text-[var(--base-body)]': !isActive,
        })}
      >
        {label}
      </span>
    </Link>
  );
};
export default AppBar;
