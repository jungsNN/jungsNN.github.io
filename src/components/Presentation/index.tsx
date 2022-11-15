import PresentationCard from './PresentationCard'
import styles from './index.module.css'

interface PresentationProps {
  path: string
  title: string
}

const Presentation: React.FunctionComponent<PresentationProps> = (props) => {
  const { path, title } = props
  return (
    <div className={styles.sectionGrid}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.presentationCols}>
        <PresentationCard path={path} title="Project 1" />
        <PresentationCard path={path} title="Project 2" />
        <PresentationCard path={path} title="Project 3" />
      </div>
    </div>
  )
}

export default Presentation
