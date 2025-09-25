import clsx from 'clsx'
import Image from 'next/image'

type LogoVariant = 'mark' | 'logotype'
type LogoColor = 'blue' | 'white' | 'black'

export function Logomark({
  className,
  invert = false,
  ...props
}: Omit<
  React.ComponentPropsWithoutRef<typeof Image>,
  'src' | 'alt' | 'width' | 'height'
> & {
  invert?: boolean
}) {
  const color = invert ? 'white' : 'black'
  const logoSrc = `/logos/mark_${color}.svg`

  return (
    <Image
      src={logoSrc}
      alt="MaxApp Logo Mark"
      width={32}
      height={32}
      className={clsx('h-8 w-8', className)}
      {...props}
    />
  )
}

export function Logo({
  className,
  variant = 'logotype',
  color = 'blue',
  size = 'md',
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Image>, 'src' | 'alt'> & {
  variant?: LogoVariant
  color?: LogoColor
  size?: 'sm' | 'md' | 'lg'
}) {
  // Filter out any invalid props that might be passed through
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { fillOnHover, ...validProps } = props as { fillOnHover?: boolean }
  const getLogoSrc = (): string => {
    const colorMap = {
      blue: 'blue',
      white: 'white',
      black: 'black',
    }
    const variantMap = {
      mark: 'mark',
      logotype: 'logotype',
    }

    // Check if it's a PNG or SVG file
    const isPng = variant === 'mark' && color === 'white'
    const extension = isPng ? 'png' : 'svg'

    return `/logos/${variantMap[variant]}_${colorMap[color]}.${extension}` as string
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-6 w-auto'
      case 'md':
        return 'h-8 w-auto'
      case 'lg':
        return 'h-12 w-auto'
      default:
        return 'h-8 w-auto'
    }
  }

  return (
    <Image
      src={getLogoSrc()}
      alt="MaxApp Logo"
      width={200}
      height={50}
      className={clsx(getSizeClasses(), className)}
      {...validProps}
    />
  )
}
