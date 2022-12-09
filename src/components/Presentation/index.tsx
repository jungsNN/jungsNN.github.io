import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { PresentationContent } from '@/models/presentation';
import styles from './index.module.css';
import Card from '../Card';
import { ComponentBaseProps } from '../types';

interface PresentationProps {
  contents: PresentationContent[];
  label: string;
  path: string;
  isFloating?: boolean;
}

interface LinkCardProps extends ComponentBaseProps {
  children: React.ReactNode;
  href: string;
  bgText?: boolean;
}

const ContentCard: React.FunctionComponent<LinkCardProps> = (props) => {
  const { bgText, children, className } = props;
  return (
    <Card className={className} size="md">
      {children}
      {bgText && (
        <div className={cn(styles.cardBg, 'grid grid-rows-3 items-start')}>
          <h1 className={cn(styles.cardBgTitle, styles._shadowDark)}>Title</h1>
          <h1 className={cn(styles.cardBgTitle, styles._shadowDark)}>Title</h1>
          <h1 className={cn(styles.cardBgTitle, styles._shadowDark)}>Title</h1>
        </div>
      )}

      {!bgText && (
        <div
          className={cn(
            styles.cardBg,
            styles.gapSm,
            'grid grid-flow-col items-center'
          )}
        >
          <h1
            className={cn(styles.cardBgTitle, styles._shadowDark, styles._dots)}
          >
            Title
          </h1>
          <h1 className={cn(styles.cardBgTitle, styles._shadowLight)}>Title</h1>
        </div>
      )}

      <Card className={cn(styles.descriptionBox)}>
        <p className="rotate-[270deg]">Title Here</p>
      </Card>
    </Card>
  );
};

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
              <li className={styles.alternate} key={content.title + '-' + i}>
                {(i % 2 === 0 || i === 0) && <></>}
                <ContentCard
                  bgText={i % 2 === 0}
                  className={cn([
                    styles.polygon,
                    'p-8',
                    i % 2 === 0 || i === 0 ? styles.col2 : styles.col1,
                  ])}
                  href={path}
                >
                  <div className={styles.content}>
                    <Link href={content.slug}>
                      <Image
                        alt={content.title}
                        className={cn('w-full h-full object-contain')}
                        height={100}
                        src={content.previewImgUrl}
                        width={100}
                      />
                    </Link>
                  </div>
                  {/* <div className="p-6 grid grid-flow-row">
                    <Card
                      size="sm"
                      className={cn(
                        styles.descriptionBox,
                        'translate-x-[-1.5rem]',
                        'translate-y-[-1rem]',
                      )}
                    >
                      <p>Title Here</p>
                    </Card>
                  </div> */}
                </ContentCard>
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
