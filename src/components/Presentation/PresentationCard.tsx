import cn from 'classnames'
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
      <img
        alt={title}
        className={styles.presentationImage}
        loading="lazy"
        sizes="(max-width: 479px) 84vw, (max-width: 767px) 40vw, (max-width: 991px) 26vw, 19vw"
        src={previewImg}
      />
      <div className="mt-5">
        <div className={styles.withArrow}>
          <h2 className={styles.presentationTitle}>{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PresentationCard
