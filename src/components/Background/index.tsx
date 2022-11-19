import cn from 'classnames'
import styles from './index.module.css'

const Background: React.FunctionComponent = () => {
  return (
    <div className={styles.dimensionBg}>
      <div className={styles.rect3dContainer}>
        <div className={cn([styles.rect3d])}>
          <div className={cn([styles.dimension, styles.back])} />
          <div className={cn([styles.dimension, styles.right])} />
          <div className={cn([styles.dimension, styles.left])} />
          <div className={cn([styles.dimension, styles.top])} />
          <div className={cn([styles.dimension, styles.bottom])} />
        </div>
      </div>
    </div>
  )
}

export default Background
