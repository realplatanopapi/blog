'use client'

import { chakra, LinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

import { linkRecipe } from '@/theme/recipes/link'

export type TextLinkProps<RouteType> = LinkProps & NextLinkProps<RouteType>

export const TextLink = chakra(NextLink, linkRecipe)
