import type { NextPage } from 'next'
import cn from 'classnames'
import AppBar from '@/components/AppBar'
import Presentation from '@/components/Presentation'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div className={cn([styles.hero, styles.intro])}>
        <AppBar />
        <div className={styles.splashWrapper}>
          <div>
            <h1 className={styles.textRotator}>The Next Archetype</h1>
            <div className={styles.startIcon}>
              <p>by Jung</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={cn([styles.grid, styles._2])}>
          <Presentation path="/portfolio" title="Portfolio" />
          <Presentation path="/blog" title="Blog" />
          <Presentation path="/about" title="About" />
          <Presentation path="/nfts" title="NFTs (coming soon)" />
        </div>
      </div>
    </>
  )
}

export default Home
