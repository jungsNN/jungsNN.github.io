import cn from 'classnames';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import cv from 'constants/cv';
import { nftstorage } from 'constants/urls';
import Page from '@/components/Page';

interface ColumnEntry {
  label: string;
  values: string[] | number[];
  key?: string;
}

interface TableData {
  title: string;
  columns: Array<ColumnEntry>;
}

interface CV {
  archived: boolean;
  description: string;
  name: string;
  metadata: TableData[];
  slug: string;
  id: number;
  images?: Array<{ id: number; cid: string }>;
}

interface RouteParams {
  slug?: string;
}

const CV_DATA: CV[] = Object.values(cv).map((item) => ({
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

export async function getStaticPaths() {
  return {
    paths: CV_DATA.map((item) => ({ params: { slug: item.slug } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params as RouteParams;
  return {
    props: { slug },
  };
}

const headerStyles = ['text-2xl text-[var(--body-300)] font-[700]'];
const labelStyles = ['text-md text-[var(--body-200)] font-[600]'];
const bodyStyles = ['text-base text-[var(--body-300)] font-[500]'];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: cn.ArgumentArray;
  color?: 'transparent' | 'default' | 'accent' | 'body';
  variant?: 'sm' | 'md' | 'lg' | 'text' | 'icon';
}

const Button = (props: ButtonProps) => {
  const { classes, children, color, onClick, variant } = props;
  return (
    <button
      className={cn(
        'opacity hover:opacity-60 focus:opacity-60',
        'text-center',
        {
          'bg-transparent active:bg-transparent text-[var(--base-300)] active:text-[var(--orange)] font-[600]':
            variant === 'text' || variant === 'icon' || color === 'transparent',
          'text-[var(--base-body-inverted)] active:text-[var(--accent)]':
            variant !== 'text' && variant !== 'icon' && color !== 'transparent',
          'bg-[var(--orange)]': !color || color === 'default',
          'p-[var(--s-xs)] text-sm': variant === 'sm',
          'p-[var(--s-sm)]': !variant || variant === 'md',
          'p-[var(--s)]': variant === 'lg',
        },
        'w-full',
        classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Cv = ({ slug }: { slug?: string }) => {
  const router = useRouter();
  const [cvData, setCvData] = useState<CV | undefined>();
  const [prevPage, setPrevPage] = useState<CV | undefined>();
  const [nextPage, setNextPage] = useState<CV | undefined>();

  const findCvData = (slug?: string) =>
    slug ? CV_DATA.find((data) => data.slug === slug) : undefined;

  useEffect(() => {
    const currPage = findCvData(slug);
    if (currPage) {
      const _prevPage = CV_DATA.find((item) => item.id === currPage.id - 1);
      const _nextPage = CV_DATA.find((item) => item.id === currPage.id + 1);
      setCvData(currPage);
      setPrevPage(_prevPage);
      setNextPage(_nextPage);
    }
  }, [slug]);

  const handleChangePage = (path: string) => {
    router.push(path);
  };

  return (
    <Page name="cv">
      {cvData ? (
        <div className="p-[var(--s-lg)_0] md:p-[10%_var(--s-256)] relative">
          <div
            className={cn(
              'absolute bottom-[calc(var(--s-lg))] md:bottom-[var(--s)] right-[calc(var(--s-sm))] md:right-[calc(var(--s-sm)+var(--s-256))]'
            )}
          >
            <p className={cn('text-xs text-[var(--body-300)]')}>
              {`cv-ZAP--${cvData.id}`}
            </p>
          </div>
          <div
            className={cn(
              'absolute top-[calc(var(--s-lg))] md:top-[var(--s-md)] right-[calc(var(--s-sm))] md:right-[calc(var(--s-sm)+var(--s-256))]'
            )}
          >
            <Button onClick={() => handleChangePage('/')} variant="sm">
              back
            </Button>
          </div>
          {prevPage && (
            <div
              className={cn(
                'w-full flex items-center justify-center backdrop-contrast-[70%]'
              )}
            >
              <Button
                color="transparent"
                disabled={cvData.id === 0}
                onClick={() => handleChangePage('/cv/' + prevPage.slug)}
                variant="sm"
              >
                <p className="text-[var(--base-300)]">▴</p>
                <p className="text-[var(--base-300)]">{prevPage.name}</p>
              </Button>
            </div>
          )}
          <div
            className={cn(
              'bg-[var(--base-200)]',
              'flex flex-col space-y-[var(--s)]',
              'p-[var(--s-md)_var(--s)] sm:p-[var(--s)_var(--s-md)] lg:p-[var(--s-lg)_9%] lg:max-w-[1024px] z-50'
            )}
          >
            <h2 className={cn('text-4xl text-[var(--body-100)] font-[700]')}>
              {`${cvData.name}${cvData.archived ? ' (archived)' : ''}`}
            </h2>
            <h3 className={cn(headerStyles)}>Summary</h3>
            <p className={cn(bodyStyles, 'whitespace-wrap break-words')}>
              {cvData.description}
            </p>
            {cvData.images && (
              <div className={cn('flex flex-row')}>
                {cvData.images.map((img) => (
                  <Image
                    className={cn('object-contain')}
                    key={`${cvData.slug}-display_${img.id}`}
                    src={`${nftstorage}/${img.cid}`}
                    alt={`${cvData.slug}-display_${img.id}`}
                    width={1000 / (cvData.images?.length ?? 1)}
                    height={1000 / (cvData.images?.length ?? 1)}
                  />
                ))}
              </div>
            )}
            {cvData.metadata.map((table, i) => (
              <div key={`${cvData.slug}-table-${i}`}>
                <h4 className={cn(headerStyles, 'mb-[var(--s-sm)]')}>
                  {table.title}
                </h4>

                <Table data={table} />
              </div>
            ))}
          </div>
          {nextPage && (
            <div
              className={cn(
                'w-full flex items-center justify-center backdrop-contrast-[70%]'
              )}
            >
              <Button
                color="transparent"
                disabled={cvData.id === 0}
                onClick={() => handleChangePage('/cv/' + nextPage.slug)}
                variant="sm"
              >
                <p className="text-[var(--base-300)]">{nextPage.name}</p>
                <p className="text-[var(--base-300)]">▾</p>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="">
            {CV_DATA.map((data) => (
              <div key={data.slug} className="">
                <span className="">{data.name}</span>
                <span>{data.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Page>
  );
};

const findMaxLen = (items: ColumnEntry[]) => {
  let currMax = 0;
  let maxLenId;
  while (items.length) {
    const currArr = items.pop();
    if (currArr && currArr.values.length > currMax) {
      currMax = currArr.values.length;
      maxLenId = currArr.key;
    }
  }
  return maxLenId;
};

const Table = ({ data }: { data: TableData }) => {
  const { title, columns } = data;
  const maxLenId = findMaxLen([...columns]);
  const maxLenCol = maxLenId && columns.find((col) => col.key === maxLenId);

  const rows: {
    [key: number]: Array<{
      key: string;
      value: string;
      columnKey: string;
    }>;
  } = {
    0: [],
  };
  maxLenCol &&
    maxLenCol.values.map((val, i) => {
      if (!rows[i]) {
        rows[i] = [];
      }
      const rowData = {
        key: `${maxLenCol.key}__r${i}`,
        value: `${val}`,
        columnKey: `${maxLenCol.key}`,
      };
      rows[i].push(rowData);
    });

  columns.forEach((col) => {
    if (col.key !== maxLenId) {
      for (let i = 0; i < col.values.length; i++) {
        const rowData = {
          key: `${col.key}__r${i}`,
          value: `${col.values[i]}`,
          columnKey: `${col.key}`,
        };
        rows[i].push(rowData);
      }
    }
  });

  const tableKey = `${title.toLowerCase().replaceAll(' ', '_')}`;

  return (
    <table>
      <thead>
        <tr
          className={cn(
            'grid grid-cols-3 gap-[var(--s-xs)] sm:gap-[var(--s-md)] lg:gap-[var(--s-lg)]'
          )}
        >
          {columns.map((col) => (
            <th
              key={`${tableKey}--${col.key}`}
              className={cn(labelStyles, 'text-start')}
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(rows).map((values, r) => (
          <tr
            key={`${tableKey}--r${r}`}
            className={cn(
              'grid grid-cols-3 gap-[var(--s-xs)] sm:gap-[var(--s-md)] lg:gap-[var(--s-lg)]'
            )}
          >
            {values.map((entry) => (
              <td
                className={cn(
                  bodyStyles,
                  'text-xs sm:text-sm whitespace-nowrap'
                )}
                key={`${tableKey}-${entry.key}--r${r}`}
              >
                {entry.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cv;
