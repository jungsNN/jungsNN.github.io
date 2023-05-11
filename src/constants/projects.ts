import { Content } from '@/models/content';
import { nftstorage } from './urls';

const projectData = [
  {
    id: 0,
    cid: 'bafybeicyskiubemk6tg5hkywdl7u2dwocyhfcbj6xwil77toeq76fs37zy',
    url: 'https://app.zap.org/prices',
    size: { width: '1600', height: '1600' },
    title: 'ZapOracles',
    year: '2021',
  },
  {
    id: 1,
    cid: 'bafybeifu2oi3spdnpzkf2gfkm7bflcrsl7i2rbgqbvlpz47uuq4iy7hkzm',
    url: 'https://app.zap.org/nft',
    size: { width: '1600', height: '1600' },
    title: 'ZapNFT',
    year: '2022',
  },
  {
    id: 2,
    cid: 'bafybeigq2qxz4jcun6hebjhbfaxo4xjkk3sz7zu4lvrua3gfh6sr4qsiqi',
    url: 'https://app.zap.org/votewatcher',
    size: { width: '1600', height: '1600' },
    title: 'VoteWatcher',
    year: '2022',
  },
  {
    id: 3,
    cid: 'bafybeifkre5xoieovqjokmp4phdyobl544wlpinomlf6hoh2u7mcwm2lba',
    url: 'https://cybershrooms.org',
    size: { width: '800', height: '800' },
    title: 'Cybershrooms',
    year: '2022',
  },
  {
    id: 4,
    cid: 'bafkreieayssvzcchc7yesyzgtchnw7ycumzojjwh3jg4kk6zfcj33qxla4',
    url: 'https://townesquare.xyz',
    size: { width: '800', height: '800' },
    title: 'TowneSquare',
    year: '2022',
  },
  {
    id: 5,
    cid: 'bafkreiga7ktv57rl2did2lb4ono347u5mpvdexqed7n4wr4ffjdlflirxe',
    url: 'https://funkyflowerz.com',
    size: { width: '800', height: '800' },
    title: 'Funky Flowerz',
    year: '2023',
  },
];

export const projectContents: Content[] = projectData.map((data) => ({
  previewImgUrl: `${nftstorage}/${data.cid}`,
  slug: `project-content-${data.id}`,
  title: data.title,
  metadata: JSON.parse(
    JSON.stringify({ year: data.year, id: data.id, size: data.size })
  ),
}));
