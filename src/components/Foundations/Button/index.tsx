import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: cn.ArgumentArray;
  color?: 'transparent' | 'default' | 'accent' | 'body';
  variant?: 'sm' | 'md' | 'lg' | 'text' | 'icon';
}

const Button = (props: ButtonProps) => {
  const { classes, children, color, onClick, variant } = props;
  return (
    <button
      className={cn(
        'opacity hover:opacity-60 focus:opacity-60',
        'text-center',
        'transform-all duration-75 ease-in',
        {
          'bg-transparent active:bg-transparent text-[var(--base-300)] text-[var(--btn-focus)] active:text-[var(--btn-focus)] font-[600]':
            variant === 'text' || variant === 'icon' || color === 'transparent',
          'text-[var(--base-body-inverted)] hover:opacity-70 focus:text-[var(--btn-focus)]':
            variant !== 'text' && variant !== 'icon' && color !== 'transparent',
          'bg-[var(--btn-color)]': !color || color === 'default',
          'p-[var(--s-xs)] text-sm': variant === 'sm',
          'p-[var(--s-sm)]': !variant || variant === 'md',
          'p-[var(--s)]': variant === 'lg',
        },
        'w-full',
        classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
