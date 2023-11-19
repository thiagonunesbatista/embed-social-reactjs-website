import React, { HTMLProps } from 'react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: HTMLProps<HTMLElement>['className']
}

export const Heading: React.FC<HeadingProps> = ({
  type = 'h1',
  children,
  className,
  ...props
}) => {
  if (type === 'h1') {
    return (
      <h1
        className={`text-black text-4xl md:text-6xl font-roboto-900 ${className}`}
        {...props}
      >
        {children}
      </h1>
    )
  }

  if (type === 'h2') {
    return (
      <h2
        className={`text-black text-3xl md:text-5xl font-roboto ${className}`}
        {...props}
      >
        {children}
      </h2>
    )
  }
}
