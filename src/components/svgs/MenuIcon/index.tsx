interface MenuIconProps {
  className?: string
  color?: string
  width?: string
  height?: string
}

const MenuIcon: React.FunctionComponent<MenuIconProps> = (props) => {
  const { color, ...rest } = props
  return (
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
  )
}

export default MenuIcon
