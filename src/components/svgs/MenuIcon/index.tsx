interface MenuIconProps {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
  variant?: 'two' | 'three' | undefined;
}

const MenuIcon: React.FunctionComponent<MenuIconProps> = (props) => {
  const { color, variant, ...rest } = props;
  return variant === 'three' ? (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1_53228)">
        <path
          d="M6 17H24V16H6V17ZM0 7V8H24V7H0ZM6 12.5H24V11.5H6V12.5Z"
          fill={color ?? 'black'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_53228">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_18_313)">
        <path
          d="M1.33398 10.6666V12.6666H32.0006V10.6666H1.33398ZM12.0007 21.6666H32.0006V19.6666H12.0007V21.6666Z"
          fill={color ?? 'white'}
        />
      </g>
      <defs>
        <clipPath id="clip0_18_313">
          <rect fill={color ?? 'white'} height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MenuIcon;
