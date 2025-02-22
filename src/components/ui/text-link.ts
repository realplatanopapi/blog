'use client'

import { chakra } from '@chakra-ui/react'
import Link from 'next/link'

import { linkRecipe } from '@/theme/recipes/link'

export const TextLink = chakra(Link, linkRecipe)
