import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CVLayout from '@/components/CVLayout';
import { CV } from '@/components/CVLayout/index.types';
import { Button } from '@/components/Foundations';
import cvEntries from '@/models/cvEntries';

interface RouteParams {
  slug?: string;
}

export async function getStaticPaths() {
  return {
    paths: [...cvEntries.map((item) => ({ params: { slug: item.slug } }))],
    fallback: 'blocking', // can also be true or 'blocking'
  };
}
const findCvData = (slug?: string) =>
  slug ? cvEntries.find((data) => data.slug === slug) : undefined;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params as RouteParams;
  if (!slug) {
    return {
      redirect: {
        destination: '/cv',
      },
    };
  }

  return {
    props: { slug },
  };
}

const Cv = ({ slug }: { slug: string }) => {
  const router = useRouter();
  const [cvData, setCvData] = useState<CV | undefined>();
  const [prevPage, setPrevPage] = useState<CV | undefined>();
  const [nextPage, setNextPage] = useState<CV | undefined>();

  useEffect(() => {
    const currPage = findCvData(slug);
    if (currPage) {
      const _prevPage = cvEntries.find((item) => item.id === currPage.id - 1);
      const _nextPage = cvEntries.find((item) => item.id === currPage.id + 1);
      setCvData(currPage);
      setPrevPage(_prevPage);
      setNextPage(_nextPage);
    }
  }, [slug]);

  useEffect(() => {
    const history = router.events;
    console.log({ history });
  }, [router.events]);

  const handleGoBack = () => router.back();
  const handleChangePage = (path: string) => {
    router.push(path);
  };

  if (!cvData) {
    return (
      <div>
        <h2>Uh oh, something went wrong.</h2>
        <div>
          <Button>reload page</Button>
          <Button onClick={handleGoBack}>go back</Button>
        </div>
      </div>
    );
  }

  return (
    <CVLayout
      cvData={cvData}
      nextPage={nextPage}
      prevPage={prevPage}
      onNavigate={handleChangePage}
      showBackButton
    />
  );
};

export default Cv;
