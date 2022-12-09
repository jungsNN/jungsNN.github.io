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
    <div className={styles.appbarWrapper}>
      <div className={styles.appbar}>
        <div className="social-wrapper">
          <Link
            className={cn([styles.socialLink, styles.wInlineBlock])}
            href="https://github.com/jungsNN"
          >
            <div>Gh.</div>
          </Link>
          <Link
            className={cn([styles.socialLink, styles.wInlineBlock])}
            href="https://linkedin.com/in/jungsnn"
          >
            <div>Li.</div>
          </Link>
          <Link
            className={cn([styles.socialLink, styles.wInlineBlock])}
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
        <div className={styles.menuButtonWrapper}>
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
