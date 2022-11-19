import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

interface PresentationCardProps {
  path: string
  title: string
  previewImg: string
}

const PresentationCard: React.FunctionComponent<PresentationCardProps> = (
  props
) => {
  const { path, previewImg, title } = props
  return (
    <Link
      className={cn([styles.presentationWrapper, styles.wInlineBlock])}
      href={`${path}/${title}`}
    >
      <Image
        alt={title}
        className={styles.presentationImage}
        loading="lazy"
        sizes="(max-width: 479px) 84vw, (max-width: 767px) 40vw, (max-width: 991px) 26vw, 19vw"
        src={previewImg}
      />
    </Link>
  )
}

export default PresentationCard
