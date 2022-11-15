import PresentationCard from './PresentationCard'
import styles from './index.module.css'
import { PresentationContent } from '@/models/presentation'

interface PresentationProps {
  contents: PresentationContent[]
  label: string
  path: string
}

const Presentation: React.FunctionComponent<PresentationProps> = (props) => {
  const { contents, label, path } = props
  return (
    <div className={styles.sectionGrid}>
      <h2 className={styles.sectionTitle}>{label}</h2>
      <ul className={styles.presentationCols}>
        {contents.map((content) => (
          <li key={content.title}>
            <PresentationCard
              path={path + '/' + content.slug}
              previewImg={content.previewImgUrl}
              title={content.title}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Presentation
