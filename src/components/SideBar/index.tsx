import cn from 'classnames';
import styles from './index.module.css';

interface SideBarProps {
  isMain?: boolean | undefined;
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {
  const isMain = props.isMain;

  return (
    <div className={cn([styles.container, isMain && styles.redBg])}>
      <div className={cn([styles.bannerWrapper])}>
        {isMain ? (
          <h1 className={cn(styles.bannerTitle, styles._lg)}>Jenny Jung</h1>
        ) : (
          <div className={styles.bannerGrid}>
            <h2 className={cn(styles.bannerTitle, styles._md)}>Jenny Jung</h2>
            <h4 className={cn(styles.bannerTitle, styles._sm)}>
              Software Engineer
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
