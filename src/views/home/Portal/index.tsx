import cn from 'classnames';
import Card from '@/components/Card';
import { ComponentBaseProps } from '@/components/types';
import styles from './index.module.css';

const Portal: React.FunctionComponent<ComponentBaseProps> = () => {
  return (
    <div className={cn([styles.container])}>
      <div className={cn([styles.quad])}>
        <Card className={cn([styles.q, styles._1])} size="half">
          <p>JENNY JUNG</p>
          <div className={cn([styles.buttonContainer])}>
            <button>
              <p>View profile →</p>
            </button>
          </div>
        </Card>
        <Card className={cn([styles.q, styles._2])} size="half">
          <p>HIIIIIIIIIII</p>
        </Card>
        <Card className={cn([styles.q, styles._3])} size="half">
          <p>HIIIIIIIIIII</p>
        </Card>
        <Card className={cn([styles.q, styles._4])} size="half">
          <p>HIIIIIIIIIII</p>
        </Card>
      </div>
    </div>
  );
};

export default Portal;
