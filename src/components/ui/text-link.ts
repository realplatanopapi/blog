'use client'

import { chakra } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

import { linkRecipe } from '@/theme/recipes/link'

export const TextLink = chakra(NextLink, linkRecipe)

export type TextLinkProps = React.ComponentProps<typeof TextLink>
