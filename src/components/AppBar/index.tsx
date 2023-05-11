import cn from 'classnames';
import { useState } from 'react';
import { CloseIcon, MenuIcon } from '@/components/svgs';
import styles from './index.module.css';
import Menu from '../Menu';
import Link from 'next/link';

const SITE_URL = process.env.SITE_URL;

interface AppBarProps {
  showLogo?: boolean;
  showMenuText?: boolean;
}

const AppBar: React.FunctionComponent<AppBarProps> = (props) => {
  const { showLogo, showMenuText } = props;
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
          'sm:min-h-[var(--s)]',
          'm-x-auto',
          'p-[var(--s-xs)_5%] sm:p-[var(--s-sm)_5%]',
          'space-[var(--s-md)]',
          'z-20'
        )}
      >
        <div className="text-lg sm:text-base">
          <AppbarLink label="CV" url={`${SITE_URL}/cv`} />
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

const AppbarLink = ({ label, url }: { label: string; url: string }) => {
  return (
    <Link
      className={cn('inline-block', 'mr-[var(--s-sm)] md:mr-[var(--s)]')}
      href={url}
      target="_blank"
    >
      <span className="text-[var(--accent)]">{'//'}</span>
      <span
        className={cn(
          'text-[var(--base-body)] hover:text-[var(--accent)] active:text-[var(--accent)] font-[800]',
          'transform-all duration-75 ease-in-out'
        )}
      >
        {label}
      </span>
    </Link>
  );
};
export default AppBar;
