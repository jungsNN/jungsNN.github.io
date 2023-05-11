import cn from 'classnames';

interface Props {
    items: React.ReactNode[];
}

const Slide: React.FC<Props> = (props) => {
    const items = props.items;
    return (
        <div
          className={cn(
            'snap-y snap-mandatory',
            'scroll-smooth',
            'items-center justify-between',
            'overflow-y-auto',
            'flex flex-col h-full',
          )}
        >
          {items.map((child, i) => (
            <div
              className={cn(
                'snap-always snap-center transition duration-150 items-center p-[var(--s)]'
              )}
              key={`slide-item-${i}`}
            >
              {child}
            </div>
          ))}
        </div>
    );
}

export default Slide;
