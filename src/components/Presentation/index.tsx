import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { PresentationContent } from '@/models/presentation';
import styles from './index.module.css';

interface PresentationProps {
  contents: PresentationContent[];
  label: string;
  path: string;
}

const Presentation: React.FunctionComponent<PresentationProps> = (props) => {
  const { contents, label, path } = props;
  return (
    <div className="flex flex-col justify-center self-center">
      <h2 className={styles.sectionTitle}>{label}</h2>
      <ul className={styles.wrapper}>
        {contents.map((content, i) => (
          <li
            className={cn([styles.box, styles[`_${i + 1}`]])}
            key={content.title}
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
