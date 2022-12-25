import cn from 'classnames';
import React, { RefObject } from 'react';
import { ComponentBaseProps } from '../types';
import styles from './index.module.css';

export interface CardProps extends ComponentBaseProps {
  bg?: string | undefined;
  size?: 'half' | 'lg' | 'md' | 'screen' | 'sm' | undefined;
  rounded?: boolean | undefined;
  radius?: number | undefined;
  polygon?: boolean;
  ref?: RefObject<HTMLDivElement>;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { className, children, polygon, radius, rounded, size, ...rest } =
    props;

  return (
    <div className={className}>
      <div
        className={cn([
          styles.card,
          styles[size ?? 'sm'],
          radius ? `rounded-${radius}` : rounded ? 'rounded-md' : 'rounded-0',
          polygon && styles.polygon,
        ])}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
