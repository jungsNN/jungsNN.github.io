import cn from 'classnames';
import React from 'react';
import { ComponentBaseProps } from '../types';
import styles from './index.module.css';

interface CardProps extends ComponentBaseProps {
  bg?: string | undefined;
  size?: 'half' | 'lg' | 'md' | 'screen' | 'sm' | undefined;
  rounded?: boolean | undefined;
  radius?: number | undefined;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { className, children, radius, rounded, size, ...rest } = props;

  return (
    <div className={className}>
      <div
        className={cn([
          styles.card,
          styles[size ?? 'sm'],
          radius ? `rounded-${radius}` : rounded ? 'rounded-md' : 'rounded-0',
        ])}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
