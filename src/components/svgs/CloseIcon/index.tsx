interface CloseIconProps {
  className?: string
  color?: string
  width?: string
  height?: string
}

const CloseIcon: React.FunctionComponent<CloseIconProps> = (props) => {
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
      <g clipPath="url(#clip0_1_77209)">
        <path
          d="M23.4498 0.569147C22.7399 -0.14075 21.5931 0.308623 20.8832 1.01852L11.9822 10.0185L3.08118 1.01875C2.37129 0.308848 1.22454 -0.158953 0.514639 0.550944C-0.195259 1.26084 0.272318 2.30862 0.982216 3.01852L10 12.0185L0.982186 20.9195C0.272288 21.6294 -0.195259 22.7762 0.514639 23.4861C1.22454 24.196 2.37129 23.7099 3.08118 23L11.9822 14L20.8832 23C21.5931 23.7099 22.7399 24.196 23.4498 23.4861C24.1597 22.7762 23.7099 21.6294 23 20.9195L13.9822 12.0185L23 3.01852C23.6917 2.32683 24.1415 1.26084 23.4498 0.569147Z"
          fill={color ?? 'black'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_77209">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CloseIcon
