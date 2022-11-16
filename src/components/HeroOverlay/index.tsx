import cn from 'classnames'
import styles from './index.module.css'

const HeroOverlay: React.FunctionComponent = () => {
  return (
    <div className={styles.box}>
      <div className={styles.scene}>
        <div className={cn([styles.cube, styles.isSpinning])}>
          <div className={cn([styles.cube__face, styles.cube__face_front])}>
            front
          </div>
          <div className={cn([styles.cube__face, styles.cube__face_back])}>
            back
          </div>
          <div className={cn([styles.cube__face, styles.cube__face_right])}>
            right
          </div>
          <div className={cn([styles.cube__face, styles.cube__face_left])}>
            left
          </div>
          <div className={cn([styles.cube__face, styles.cube__face_top])}>
            top
          </div>
          <div className={cn([styles.cube__face, styles.cube__face_bottom])}>
            bottom
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroOverlay
