import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { PresentationContent } from '@/models/presentation';
import styles from './index.module.css';

interface PresentationProps {
  contents: PresentationContent[];
  label: string;
  path: string;
  isFloating?: boolean;
}

const Presentation: React.FunctionComponent<PresentationProps> = (props) => {
  const { contents, isFloating, label, path } = props;
  return (
    <div
      className={cn([
        isFloating && styles.container,
        'flex flex-col',
        isFloating
          ? 'self-end justify-between w-full'
          : 'self-center justify-center',
      ])}
    >
      <h2 className={styles.sectionTitle}>{label}</h2>
      <ul className={cn([isFloating ? styles.floating : styles.wrapper])}>
        {isFloating
          ? contents.map((content, i) => (
              <li
                className={cn([styles.alternate])}
                key={content.title + '-' + i}
              >
                {(i % 2 === 0 || i === 0) && <></>}
                <Link
                  className={cn([
                    styles.square,
                    i % 2 === 0 || i === 0 ? styles.col2 : styles.col1,
                  ])}
                  href={path}
                >
                  <Image
                    alt={content.title}
                    className="w-full h-full object-cover"
                    height={100}
                    src={content.previewImgUrl}
                    width={100}
                  />
                </Link>
                {(i % 2 !== 0 || i === 1) && <></>}
              </li>
            ))
          : contents.map((content, i) => (
              <li
                className={cn([styles.box, styles[`_${i + 1}`]])}
                key={content.title + '-' + i}
              >
                <Link href={path}>
                  <Image
                    alt={content.title}
                    className="w-full h-full object-cover"
                    height={100}
                    src={content.previewImgUrl}
                    width={100}
                  />
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Presentation;
