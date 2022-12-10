import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Card, { CardProps } from '@/components/Card';
import { Content } from '@/models/content';
import styles from './index.module.css';

type CyberCardVariant = 'dots' | 'text' | string | undefined;

interface CyberCardProps extends CardProps {
  content: Content | string;
  variant?: CyberCardVariant;
}

interface ImageCardProps extends CardProps {
  contentName: string;
  href: string;
  imageUrl?: string;
  variant?: CyberCardVariant;
}

const ImageCard: React.FunctionComponent<ImageCardProps> = (props) => {
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
            className={cn(styles.cardBgTitle, styles._shadowDark, styles._dots)}
          >
            •
          </h1>
          <h1 className={cn(styles.cardBgTitle, styles._shadowLight)}>•</h1>
          <Card className={cn(styles.descriptionBox)}>
            <p className="rotate-[270deg]">{contentName}</p>
          </Card>
        </div>
      ) : (
        <div className={cn(styles.cardBg, 'grid grid-rows-3 items-start')}>
          <h1 className={cn(styles.cardBgTitle, styles._shadowDark)}>
            {contentName}
          </h1>
          <h1 className={cn(styles.cardBgTitle, styles._shadowDark)}>
            {contentName}
          </h1>
          <h1 className={cn(styles.cardBgTitle, styles._shadowDark)}>
            {contentName}
          </h1>
        </div>
      )}
    </Card>
  );
};

const CyberCard: React.FunctionComponent<CyberCardProps> = (props) => {
  const { content, ...rest } = props;
  if (typeof content === 'string') {
    return <div>{content}</div>;
  }

  const { previewImgUrl: imageUrl, slug: href, title: contentName } = content;

  return (
    <ImageCard
      className={styles.polygon}
      contentName={contentName}
      href={href}
      imageUrl={imageUrl}
      {...rest}
    />
  );
};

export default CyberCard;
