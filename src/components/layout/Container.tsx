type ContainerProps = {
  children: React.ReactNode
  className?: string
  size?: 'narrow' | 'default' | 'wide'
}

const sizeClasses = {
  narrow: 'max-w-[720px]',
  default: 'max-w-[1120px]',
  wide: 'max-w-[1400px]',
}

export default function Container({
  children,
  className = '',
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${sizeClasses[size]} px-5 sm:px-8 lg:px-20 ${className}`}
    >
      {children}
    </div>
  )
}
