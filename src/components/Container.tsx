import React from 'react'

interface ContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div className='max-w-7xl mx-auto' {...props}>
      {children}
    </div>
  )
}
