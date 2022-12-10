import type { NextPage } from 'next';
import cn from 'classnames';
import { CyberCard as FeatureCard } from '@/components/Themed';
import Presentation from '@/components/Presentation';
import { mockContents } from '@/models/mocks/contents';
import styles from './index.module.css';

const MOCK_FEATURE_CONTENT = mockContents[0];

const HomeView: NextPage = () => {
  const contents = [...mockContents, ...mockContents];

  return (
    <div className={cn('grid grid-flow-row w-full')}>
      <div className={cn(styles.feature)}>
        <div>HELLO</div>
        <FeatureCard
          content={MOCK_FEATURE_CONTENT}
          key="feature-card"
          variant="text"
        />
      </div>
      <div className={cn('w-full')}>
        <Presentation
          contents={contents}
          header="Portfolio"
          path="/portfolio"
        />
      </div>
    </div>
  );
};

export default HomeView;
