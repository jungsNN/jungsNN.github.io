import cn from 'classnames'
import { useState } from 'react'
import { CloseIcon, MenuIcon } from '@/components/svgs'
import styles from './index.module.css'
import Menu from '../Menu'
import Link from 'next/link'

const AppBar: React.FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

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
            <p>logo</p>
          </div>
        </div>
        <div className={styles.menuButtonWrapper}>
          <div
            className={cn(['justify-self-center', styles.hamburger])}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={cn([styles.hamburgerMenu, styles._2])}>
              {!isMenuOpen && (
                <MenuIcon
                  className={cn([styles.open])}
                  color="var(--royal-blue)"
                  height="4vw"
                  width="4vw"
                />
              )}
              {isMenuOpen && (
                <CloseIcon
                  className={styles.remove}
                  color="var(--royal-blue)"
                  height="4vw"
                  width="4vw"
                />
              )}
            </div>
            <div className={cn(['display-block', styles.menuLabelWrapper])}>
              <div className="menu-label">{isMenuOpen ? 'Close' : 'Menu'}</div>
              <div className="menu-label">Close</div>
            </div>
          </div>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} />
    </div>
  )
}

export default AppBar
