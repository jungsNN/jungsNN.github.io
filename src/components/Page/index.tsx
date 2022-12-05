import cn from 'classnames';
import React from 'react';
import styles from './index.module.css';

const PageTitle = () => {
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

const Page: React.FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <PageTitle />
      {children}
    </div>
  );
};

export default Page;
