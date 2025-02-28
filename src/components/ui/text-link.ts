'use client'

import { chakra } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'

import { linkRecipe } from '@/theme/recipes/link'

export interface TextLinkProps<RouteType> extends LinkProps<RouteType> {}

export const TextLink = chakra(Link, linkRecipe)
