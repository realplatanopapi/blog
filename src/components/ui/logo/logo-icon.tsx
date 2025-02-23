import { Image, ImageProps } from '@chakra-ui/react'

interface LogoIconProps extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'w' | 'h'> {
  boxSize?: number
}

export const LogoIcon = ({ boxSize = 42, ...props }: LogoIconProps) => {
  return <Image src="/logo.png" alt="Coquito.io" boxSize={boxSize} {...props} />
}
