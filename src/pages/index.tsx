import type { NextPage } from 'next'
import cn from 'classnames'
import HeroOverlay from '@/components/HeroOverlay'
import Presentation from '@/components/Presentation'
import { PresentationContent } from '@/models/presentation'
import styles from '@/styles/Home.module.css'

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
        <HeroOverlay />
        <div className={styles.splashWrapper}>
          <div>
            <h1 className={cn([styles.textRotator])}>
              alpha<span className="text-2xl mr-[20px]">,</span>
              <span className="text-2xl">spirals</span> and omega
            </h1>
            <p className={cn(['text-xl text-right'])}>by Jenny Jung</p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={cn([styles.grid, styles._2])}>
          <Presentation
            contents={[
              ...mockPresentationContents,
              ...mockPresentationContents,
            ]}
            label="Latest"
            path="/portfolio"
          />
        </div>
      </div>
    </>
  )
}

export default Home
