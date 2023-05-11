import cn from 'classnames';
import Image from 'next/image';
import type { NextPage } from 'next';
import Page from '@/components/Page';
import Slide from '@/components/Slide';
import { projectContents } from 'constants/projects';

const Home: NextPage = () => {
  return (
    <Page name="home">
      <div className={cn(
        'absolute right-0 top-0 bottom-0'
      )}>
        <Slide items={
          projectContents.map((item, i) => (
            <div key={`${item.slug}`} className={cn(
              
            )}>
              <Image className={cn(
                'aspect-square',
                'w-[calc(100vw-1.5rem)] md:w-[calc(100vw/3.3)] max-w-[15rem]',
                'object-contain')} src={item.previewImgUrl} alt={item.title} width={800} height={800} />
            </div>
          ))
        } />
      </div>
    </Page>
  );
};

export default Home;
