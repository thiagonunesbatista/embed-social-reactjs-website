import { HTMLProps } from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode
  className?: HTMLProps<HTMLElement>['className']
  hasHover?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  hasHover = true,
  ...props
}) => {
  return (
    <button
      className={`bg-primary text-white py-2 md:py-3 px-3 md:px-4 ${
        hasHover ? 'hover:scale-110 transition-transform' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
