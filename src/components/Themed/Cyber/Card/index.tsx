import React, { RefObject } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Card, { CardProps } from '@/components/Card';
import { Content, instanceOfContent } from '@/models/content';
import styles from './index.module.css';

type CyberCardVariant = 'dots' | 'text' | 'stripe' | string | undefined;

interface CyberCardProps extends CardProps {
  content: Content | React.ReactNode | string;
  header?: string;
  variant?: CyberCardVariant;
  ref?: RefObject<HTMLDivElement>;
}

interface LinkCardProps extends CardProps {
  contentName: string;
  href: string;
  imageUrl?: string;
  variant?: CyberCardVariant;
}

const LinkCard: React.FunctionComponent<LinkCardProps> = (props) => {
  const { contentName, className, href, imageUrl, variant, ...rest } = props;
  return (
    <Card className={className} size="md" {...rest}>
      <div className={styles.content}>
        <Link href={href}>
          {imageUrl && (
            <Image
              alt={contentName}
              className={cn('w-full h-full object-contain')}
              height={100}
              src={imageUrl}
              width={100}
            />
          )}
        </Link>
      </div>
      {variant === 'dots' ? (
        <div
          className={cn(
            styles.cardBg,
            styles.gapSm,
            'grid grid-flow-col items-center'
          )}
        >
          <h1
            className={cn(
              styles.cardBgTitle,
              styles.shadow,
              styles._dark,
              styles._dots
            )}
          >
            •
          </h1>
          <h1 className={cn(styles.cardBgTitle, styles.shadow, styles._light)}>
            •
          </h1>
          <Card className={cn(styles.descriptionBox)}>
            <p className="rotate-[270deg]">{contentName}</p>
          </Card>
        </div>
      ) : variant === 'text' ? (
        <div className={cn(styles.cardBg, 'grid grid-rows-3 items-start')}>
          <h1 className={cn(styles.cardBgTitle, styles.shadow, styles._dark)}>
            {contentName}
          </h1>
          <h1 className={cn(styles.cardBgTitle, styles.shadow, styles._dark)}>
            {contentName}
          </h1>
          <h1 className={cn(styles.cardBgTitle, styles.shadow, styles._dark)}>
            {contentName}
          </h1>
        </div>
      ) : (
        <div
          className={cn(
            styles.cardBg,
            styles.gapSm,
            'grid grid-flow-col items-center'
          )}
        >
          <div className={cn('h-full', 'w-4', 'bg-white')} />
          <h1
            className={cn(
              styles.cardBgTitle,
              styles.shadow,
              styles._light,
              styles._white
            )}
          >
            {contentName}
          </h1>
        </div>
      )}
    </Card>
  );
};

const CyberCard: React.FunctionComponent<CyberCardProps> = (props) => {
  const { content, header, ...rest } = props;

  if (instanceOfContent(content)) {
    const {
      previewImgUrl: imageUrl,
      slug: href,
      title: contentName,
    } = content as Content;
    return (
      <LinkCard
        className={styles.polygon}
        contentName={contentName}
        href={href}
        imageUrl={imageUrl}
        {...rest}
      />
    );
  }
  return (
    <div className={cn(styles.polygon)}>
      <Card className={props.className} size="md" {...rest}>
        <div className={styles.content}>{content}</div>
        <div
          className={cn(
            styles.cardBg,
            styles.gapSm,
            'grid grid-flow-col items-center'
          )}
        >
          {props.variant === 'dots' ? (
            <h1
              className={cn(
                styles.cardBgTitle,
                styles.shadow,
                styles._white,
                styles._dots
              )}
            >
              •
            </h1>
          ) : (
            <div className={cn('h-full', 'w-4', 'bg-white')} />
          )}
          <h1
            className={cn(
              styles.cardBgTitle,
              styles.shadow,
              styles._light,
              styles._white
            )}
          >
            {header ?? ''}
          </h1>
        </div>
      </Card>
    </div>
  );
};

export default CyberCard;
