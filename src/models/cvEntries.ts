import { CV } from '@/components/CVLayout/index.types';
import cv from 'constants/cv';

const cvEntries: CV[] = Object.values(cv).map((item) => ({
  ...item,
  metadata: item.metadata.map((meta) => ({
    ...meta,
    columns: meta.data.map((entry) => ({
      ...entry,
      values: entry.data,
      key: `${item.slug}-${meta.title
        .toLowerCase()
        .replaceAll(' ', '_')}--col_${entry.label}`,
    })),
  })),
}));

export default cvEntries;
