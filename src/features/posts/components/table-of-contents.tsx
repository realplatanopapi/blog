'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useCallback, useEffect, useState } from 'react'
import { LuArrowUpWideNarrow } from 'react-icons/lu'
import { useDebounceCallback } from 'usehooks-ts'

import { Box, Icon, Stack, Text, TextLink, TextLinkProps } from '@/components'

interface TableOfContentsProps {}

export function TableOfContents(_props: TableOfContentsProps) {
  const [heading, setHeading] = useState<HTMLElement | null>(null)
  const [subheadings, setSubheadings] = useState<HTMLElement[]>([])
  const [activeSubheading, setActiveSubheading] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const title = document.querySelector('h1')
    if (title) {
      title.id = 'top'
      setHeading(title)
    }

    const headings = document.querySelectorAll('h2')
    headings.forEach((heading) => {
      heading.id = heading.innerText.toLowerCase().replace(/\W/g, '-')
    })
    setSubheadings(Array.from(headings))

    if (window.location.hash) {
      const headingElement = document.getElementById(stripLeadingHash(window.location.hash))
      if (headingElement) {
        scrollToElement(headingElement)
      }
    }
  }, [])

  const detectActiveHeading = useCallback(() => {
    let candidate: HTMLElement | null = null

    const index = subheadings.length - 1
    for (let i = index; i >= 0; i--) {
      const heading = subheadings[i]
      const headingRect = heading.getBoundingClientRect()
      // If heading position is less than or equal to 50% of the viewport height, set it as the active heading
      if (headingRect.top <= window.innerHeight / 2) {
        candidate = heading
        break
      }
    }

    if (candidate?.id !== activeSubheading?.id) {
      setActiveSubheading(candidate)
    }
  }, [subheadings, activeSubheading])

  const detectActiveHeadingDebounced = useDebounceCallback(detectActiveHeading, 50)

  useEffect(() => {
    window.addEventListener('scroll', detectActiveHeadingDebounced)

    return () => {
      window.removeEventListener('scroll', detectActiveHeadingDebounced)
    }
  }, [detectActiveHeadingDebounced])

  const handleClick: React.HTMLAttributes<HTMLAnchorElement>['onClick'] = (event) => {
    const target = event.currentTarget
    const href = target.getAttribute('href')
    if (!href) return

    const headingId = stripLeadingHash(href)
    const headingElement = document.getElementById(headingId)

    if (headingElement) {
      event.preventDefault()
      scrollToElement(headingElement)
    }
  }

  if (!subheadings.length) return null

  return (
    <Box as="aside" position="fixed" left={5} top="50%" transform="translateY(-50%)">
      <AnimatePresence>
        {subheadings.length > 0 && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
            <Box
              hideBelow="xl"
              bg="bg.subtle"
              borderStyle="solid"
              borderColor="border.muted"
              borderWidth={1}
              borderRadius="sm"
              fontSize="xs"
              width="35ch"
              padding={5}
            >
              <Stack gap={5}>
                <TextLink href="#top" color="fg.muted" variant="plain" onClick={handleClick}>
                  <Icon>
                    <LuArrowUpWideNarrow />
                  </Icon>
                  <Text as="span" fontWeight="medium" truncate>
                    {heading?.innerText ?? 'Table of contents'}
                  </Text>
                </TextLink>
                {subheadings.map((heading) => {
                  const isActive = activeSubheading?.id === heading.id
                  console.log({ isActive, activeSubheading, heading })

                  return (
                    <TableOfContentsLink
                      leftIcon={
                        <Box
                          as="span"
                          boxSize="0.5em"
                          flexShrink={0}
                          display={isActive ? 'block' : 'none'}
                          bg="brand.cocoGreen"
                          borderRadius="full"
                        />
                      }
                      hash={heading.id}
                      key={heading.id}
                    >
                      {heading.innerText}
                    </TableOfContentsLink>
                  )
                })}
              </Stack>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}

interface TableOfContentsLinkProps<RouteType> extends Omit<TextLinkProps<RouteType>, 'as' | 'children' | 'href'> {
  leftIcon?: React.ReactNode
  children: string
  hash: string
}

function TableOfContentsLink<RouteType>({ children, hash, leftIcon, ...props }: TableOfContentsLinkProps<RouteType>) {
  const handleClick: React.HTMLAttributes<HTMLAnchorElement>['onClick'] = (event) => {
    const hashTarget = document.getElementById(hash)
    if (hashTarget) {
      event.preventDefault()
      scrollToElement(hashTarget)
    }
  }

  return (
    <TextLink
      display="flex"
      alignItems="center"
      gap={2}
      href={{
        hash,
      }}
      variant="plain"
      onClick={handleClick}
      {...props}
    >
      {leftIcon}
      <Text as="span" truncate>
        {children}
      </Text>
    </TextLink>
  )
}

function scrollToElement(element: HTMLElement) {
  window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' })
}

function stripLeadingHash(id: string) {
  return id.replace(/^#/, '')
}
