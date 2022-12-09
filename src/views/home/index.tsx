import type { NextPage } from 'next';
import cn from 'classnames';
import Presentation from '@/components/Presentation';
import { PresentationContent } from '@/models/presentation';
import styles from './index.module.css';

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
];

const HomeView: NextPage = () => {
  return (
    <>
      {/* <Portal /> */}
      {/* <div className={cn([styles.hero, styles.intro])}>
        <HeroOverlay />
      </div> */}
      <div className={cn([styles.section, 'w-full'])}>
        <div className={cn([styles.grid, styles._2])}>
          <Presentation
            contents={[
              ...mockPresentationContents,
              ...mockPresentationContents,
            ]}
            isFloating
            label="Latest"
            path="/portfolio"
          />
        </div>
      </div>
    </>
  );
};

export default HomeView;
