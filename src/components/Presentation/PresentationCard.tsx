import cn from 'classnames'
import Link from 'next/link'
import styles from './index.module.css'

interface PresentationCardProps {
  path: string
  title: string
  previewImg?: string
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
      <div>{previewImg ?? 'img card'}</div>
      <div className="m-5">
        <div className={styles.withArrow}>
          <h2 className={styles.presentationTitle}>{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PresentationCard
