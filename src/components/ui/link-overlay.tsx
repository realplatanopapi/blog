import {
  LinkBox as ChakraLinkBox,
  LinkBoxProps as ChakraLinkBoxProps,
  LinkOverlay as ChakraLinkOverlay,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { BareLink, BareLinkProps } from '@/components/base'

export type LinkBoxProps = ChakraLinkBoxProps
export interface LinkOverlayProps extends BareLinkProps {}

export function LinkOverlay({ children, ...props }: PropsWithChildren<LinkOverlayProps>) {
  return (
    <ChakraLinkOverlay asChild>
      <BareLink {...props}>{children}</BareLink>
    </ChakraLinkOverlay>
  )
}

export const LinkBox = ChakraLinkBox
