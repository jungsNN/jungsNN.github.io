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
        'text-center',
        'transform-all duration-75 ease-in',
        {
          'bg-transparent focus:bg-transparent font-body-bold text-[var(--base-body)] focus:text-[var(--btn-focus)]':
            variant === 'text' || variant === 'icon' || color === 'transparent',
          'text-[var(--body-200)] hover:opacity-90 focus:opacity':
            variant !== 'text' && variant !== 'icon' && color !== 'transparent',
          'bg-[var(--btn-base)] focus:bg-[var(--btn-focus)]':
            !color || color === 'default',
          'p-[var(--s-xs)] text-sm': variant === 'sm',
          'p-[var(--s-sm)]': !variant || variant === 'md',
          'p-[var(--s)]': variant === 'lg',
        },
        'w-full',
        classes
      )}
      onClick={onClick}
      style={{
        boxShadow: !color || color === 'default' ? 'var(--btn-shadow)' : 'none',
        textShadow: 'var(--body-shadow)',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
