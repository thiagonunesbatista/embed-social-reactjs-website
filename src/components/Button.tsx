interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className='bg-primary text-white py-3 px-4' {...props}>
      {children}
    </button>
  )
}
