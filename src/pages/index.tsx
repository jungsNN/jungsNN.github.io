import type { NextPage } from 'next';
import HomeView from '@/views/home';
import Page from '@/components/Page';

const Home: NextPage = () => {
  return (
    <Page name="home">
      <HomeView />
    </Page>
  );
};

export default Home;
