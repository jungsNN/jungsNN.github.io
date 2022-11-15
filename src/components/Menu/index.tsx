import cn from 'classnames'
import Link from 'next/link'
import styles from './index.module.css'

interface MenuProps {
  isOpen: boolean
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { isOpen } = props

  return (
    <div
      className={cn([
        styles.menu,
        {
          'display-none': !isOpen,
          'display-flex opacity-1': isOpen,
          'bg-blue': isOpen,
        },
      ])}
    >
      <div className={cn([styles.menuContainer, styles._2])}>
        <div>
          <div className={styles.navigationContent}>
            <Link
              className={cn([
                styles.navigationLink,
                styles._2,
                styles.wInlineBlock,
                {
                  'opacity-0': !isOpen,
                  'opacity-1': isOpen,
                },
              ])}
              href="/about"
              style={{
                transform:
                  'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <h1 className={cn([styles.navigationText, styles._2])}>
                About Me
              </h1>
              <div className={cn([styles.navigationLine])}>
                <div className={cn([styles.navigationSubLine])} />
              </div>
            </Link>

            <Link
              className={cn([
                styles.navigationLink,
                styles._2,
                styles.wInlineBlock,
                {
                  'opacity-0': !isOpen,
                  'opacity-1': isOpen,
                },
              ])}
              href="/portfolio"
              style={{
                transform:
                  'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <h1 className={cn([styles.navigationText, styles._2])}>
                Portfolio
              </h1>
              <div className={styles.navigationLine}>
                <div className={styles.navigationSubLine} />
              </div>
            </Link>

            <Link
              className={cn([
                styles.navigationLink,
                styles._2,
                styles.wInlineBlock,
                {
                  'opacity-0': !isOpen,
                  'opacity-1': isOpen,
                },
              ])}
              href="/blog"
              style={{
                transform:
                  'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <h1 className={cn([styles.navigationText, styles._2])}>Blog</h1>
              <div className={styles.navigationLine}>
                <div className={styles.navigationSubLine} />
              </div>
            </Link>

            <Link
              className={cn([
                styles.navigationLink,
                styles._2,
                styles.wInlineBlock,
                {
                  'opacity-0': !isOpen,
                  'opacity-1': isOpen,
                },
              ])}
              href="/nfts"
              style={{
                transform:
                  'translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              <h1 className={cn([styles.navigationText, styles._2])}>NFTs</h1>
              <div className={styles.navigationLine}>
                <div className={styles.navigationSubLine} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
