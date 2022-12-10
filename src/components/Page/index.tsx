import cn from 'classnames';
import Background from '../Background';
import { ComponentBaseProps } from '../types';
import styles from './index.module.css';

interface PageProps extends ComponentBaseProps {
  name: string;
}

export const PageTitle = () => {
  return (
    <div className={styles.splashWrapper}>
      <div>
        <h1 className={cn([styles.textRotator])}>
          alpha<span className="text-2xl mr-[20px]">,</span>
          <span className="text-2xl">spirals</span> and omega
        </h1>
        <p className={cn(['text-xl text-right'])}>by Jenny Jung</p>
      </div>
    </div>
  );
};

const Page: React.FunctionComponent<PageProps> = (props) => {
  const { children, name, ...rest } = props;
  const pageName = 'Page-' + name;

  return (
    <>
      <div className={styles.layout} id={pageName} {...rest}>
        {children}
      </div>
      <Background />
    </>
  );
};

export default Page;
