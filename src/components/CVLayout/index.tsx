import cn from 'classnames';
import Image from 'next/image';
import { nftstorage } from 'constants/urls';
import { Button } from '../Foundations';
import { CV, ColumnEntry, TableData } from './index.types';
import Link from 'next/link';

const headerStyles = ['text-2xl text-[var(--body-300)] font-[700]'];
const labelStyles = ['text-md text-[var(--body-200)] font-[600]'];
const bodyStyles = ['text-base text-[var(--body-300)] font-[500]'];

const CVLayout = ({
  cvData,
  nextPage,
  prevPage,
  onNavigate,
  showBackButton,
}: {
  cvData: CV;
  nextPage?: CV;
  prevPage?: CV;
  onNavigate?: (path: string) => void;
  showBackButton?: boolean;
}) => {
  return (
    <div className="p-[var(--s-md)_0] md:p-[var(--s-lg)_0] md:p-[10%_var(--s-256)] relative">
      <div
        className={cn(
          'absolute bottom-[calc(var(--s-lg))] md:bottom-[var(--s)] right-[calc(var(--s-sm))] md:right-[calc(var(--s-sm)+var(--s-256))]'
        )}
      >
        <p className={cn('text-xs text-[var(--body-300)]')}>
          {`cv-ZAP--${cvData.id}`}
        </p>
      </div>
      {showBackButton && (
        <div
          className={cn(
            'absolute top-[calc(var(--s-lg))] md:top-[var(--s-md)] right-[calc(var(--s-sm))] md:right-[calc(var(--s-sm)+var(--s-256))]'
          )}
        >
          {onNavigate ? (
            <Button onClick={() => onNavigate('/')} variant="sm">
              exit
            </Button>
          ) : (
            <Link href="/">
              <Button variant="sm">exit</Button>
            </Link>
          )}
        </div>
      )}
      {onNavigate && prevPage && (
        <div className={cn('w-full flex items-center justify-center')}>
          <Button
            color="transparent"
            disabled={cvData.id === 0}
            onClick={() => onNavigate('/cv/' + prevPage.slug)}
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
          'p-[var(--s)_var(--s-sm)] sm:p-[var(--s)_var(--s-md)] lg:p-[var(--s-lg)_9%] lg:max-w-[1024px] z-50'
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
      {onNavigate && nextPage && (
        <div
          className={cn(
            'w-full flex items-center justify-center backdrop-contrast-[70%]'
          )}
        >
          <Button
            color="transparent"
            disabled={cvData.id === 0}
            onClick={() => onNavigate('/cv/' + nextPage.slug)}
            variant="sm"
          >
            <p className="text-[var(--base-300)]">{nextPage.name}</p>
            <p className="text-[var(--base-300)]">▾</p>
          </Button>
        </div>
      )}
    </div>
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

export default CVLayout;
