import { Flex, FlexProps } from '@chakra-ui/react'

import { BareLink } from '@/components/base'

interface LogoLinkProps extends FlexProps {
  children: React.ReactNode
}

export const LogoLink = ({ children, ...props }: LogoLinkProps) => {
  return (
    <Flex
      asChild
      justifyContent="center"
      display="inline-flex"
      _hover={{
        transform: 'scale(1.1)',
        transformOrigin: 'center',
      }}
      {...props}
    >
      <BareLink
        href={{
          pathname: '/',
        }}
      >
        {children}
      </BareLink>
    </Flex>
  )
}
