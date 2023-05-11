import cn from 'classnames';
import { useState } from 'react';
import { CloseIcon, MenuIcon } from '@/components/svgs';
import styles from './index.module.css';
import Menu from '../Menu';
import Link from 'next/link';

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
          'sm:min-h-[var(--s-max)]',
          'm-x-auto',
          'p-[var(--s-xs)_5%] sm:p-[var(--s-sm)_5%]',
          'space-[var(--s-md)]',
          'z-20'
        )}
      >
        <div className="text-lg sm:text-base">
          <Link
            className={cn(
              'text-[var(--base-body)] hover:text-[var(--primary)] font-[700]',
              'inline-block',
              'mr-[var(--s)]'
            )}
            href="https://github.com/jungsNN"
          >
            Gh.
          </Link>
          <Link
            className={cn(
              'text-[var(--base-body)] font-[700]',
              'inline-block',
              'mr-[var(--s)]'
            )}
            href="https://linkedin.com/in/jungsnn"
          >
            <div>Li.</div>
          </Link>
          <Link
            className={cn(
              'text-[var(--base-body)] font-[700]',
              'inline-block',
              'mr-[var(--s)]'
            )}
            href="https://twitter.com/jungsnn"
          >
            <div>Tw.</div>
          </Link>
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

export default AppBar;
