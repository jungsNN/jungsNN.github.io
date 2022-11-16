import type { NextPage } from 'next'
import cn from 'classnames'
import AppBar from '@/components/AppBar'
import Presentation from '@/components/Presentation'
import styles from '@/styles/Home.module.css'
import { PresentationContent } from '@/models/presentation'
import HeroOverlay from '@/components/HeroOverlay'

const mockPresentationContents: PresentationContent[] = [
  {
    title: 'mock content 1',
    slug: 'mock-content-1',
    previewImgUrl:
      'https://nftstorage.link/ipfs/bafybeifkre5xoieovqjokmp4phdyobl544wlpinomlf6hoh2u7mcwm2lba',
  },
  {
    title: 'mock content 2',
    slug: 'mock-content-2',
    previewImgUrl:
      'https://nftstorage.link/ipfs/bafybeifkre5xoieovqjokmp4phdyobl544wlpinomlf6hoh2u7mcwm2lba',
  },
  {
    title: 'mock content 3',
    slug: 'mock-content-3',
    previewImgUrl:
      'https://nftstorage.link/ipfs/bafybeifkre5xoieovqjokmp4phdyobl544wlpinomlf6hoh2u7mcwm2lba',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <div className={cn([styles.hero, styles.intro])}>
        <AppBar />
        <HeroOverlay />
        <div className={styles.splashWrapper}>
          <div>
            <h1 className={cn([styles.textRotator])}>The Next Archetype</h1>
            <div className={styles.startIcon}>
              <p>by Jung</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={cn([styles.grid, styles._2])}>
          <Presentation
            contents={mockPresentationContents}
            label="Portfolio"
            path="/portfolio"
          />
          <Presentation
            contents={mockPresentationContents}
            label="Blog"
            path="/blog"
          />
          <Presentation
            contents={mockPresentationContents}
            label="About"
            path="/about"
          />
          <Presentation
            contents={mockPresentationContents}
            label="NFTs (coming soon)"
            path="/nfts"
          />
        </div>
      </div>
    </>
  )
}

export default Home
