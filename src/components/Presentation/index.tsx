import cn from 'classnames';
import Link from 'next/link';
import { Content } from '@/models/content';
import { CyberCard as ContentCard } from '../Themed';
import styles from './index.module.css';

interface PresentationProps {
  contents: Content[];
  header: string;
  path: string;
  isFloating?: boolean;
}

const Presentation: React.FunctionComponent<PresentationProps> = (props) => {
  const { contents, header, path } = props;
  return (
    <div
      className={cn([
        'flex flex-col gap-[3rem]',
        'self-start justify-flex-start',
      ])}
    >
      <Link href={path}>
        <h2 className={styles.sectionTitle}>{header}</h2>
      </Link>
      <div className={cn('grid gap-[5rem]', styles._horizontal)}>
        {contents.map((content, i) => (
          <ContentCard
            content={content}
            key={content.slug + '_' + i}
            variant="dots"
          />
        ))}
      </div>
    </div>
    // <div
    //   className={cn([
    //     'flex flex-row',
    //     isFloating
    //       ? 'self-end justify-between w-full'
    //       : 'self-start justify-center',
    //   ])}
    // >
    //   <Link href={path}>
    //     <h2 className={styles.sectionTitle}>{header}</h2>
    //   </Link>
    //   <ul className={cn(styles.grid, styles.s4, isFloating ? styles.row : styles.col)}>
    //     {isFloating
    //       ? contents.map((content, i) => (
    //           <li className={cn("grid", styles._alternate)} key={content.title + '-' + i}>
    //             {(i % 2 === 0 || i === 0) && <></>}
    //             <ContentCard
    //               className={cn([
    //                 i % 2 === 0 || i === 0 ? styles.col2 : styles.col1,
    //               ])}
    //               content={content}
    //               variant={i % 2 === 0 ? 'text' : 'dots'}
    //             />
    //             {(i % 2 !== 0 || i === 1) && <></>}
    //           </li>
    //         ))
    //       : contents.map((content, i) => (
    //           <li
    //             // className={cn(styles.grid, styles._horizontal)}
    //             key={content.title + '-' + i}
    //           >
    //             <ContentCard
    //               content={content}
    //               variant="dots"
    //             />
    //           </li>
    //         ))}
    //   </ul>
    // </div>
  );
};

export default Presentation;
