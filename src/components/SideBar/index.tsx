import cn from 'classnames';
import styles from './index.module.css';

interface SideBarProps {
  isMain?: boolean | undefined;
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {
  const isMain = props.isMain;

  return (
    <div
      className={cn([
        'w-[calc(100vw*(128/1440))] h-full',
        styles.container,
        isMain && styles.redBg,
      ])}
    >
      <div className={cn([styles.logoButton])}>
        {isMain ? (
          <h1>Jenny Jung</h1>
        ) : (
          <div className={styles.logoWrapper}>
            <h2>Jenny Jung</h2>
            <h4>Software Engineer</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
