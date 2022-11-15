import cn from 'classnames'
import styles from './index.module.css'

const HeroOverlay: React.FunctionComponent = () => {
  return (
    <>
      <div className={cn([styles.movingLine, styles._1])} />
    </>
    // <div className={styles.overlay}>
    //     <div className={styles.container}>
    //         <div className={styles.movingLine} />
    //     </div>
    // </div>
  )
}

export default HeroOverlay
