'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

import { Box, Stack, Text, TextLink } from '@/components'

interface TableOfContentsProps {}

export function TableOfContents(_props: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HTMLElement[]>([])

  useEffect(() => {
    const title = document.querySelector('h1')
    if (title) {
      title.id = 'top'
    }

    const headings = document.querySelectorAll('h2')
    headings.forEach((heading) => {
      heading.id = heading.innerText.toLowerCase().replace(/\W/g, '-')
    })
    setHeadings(Array.from(headings))

    if (window.location.hash) {
      const headingElement = document.getElementById(stripLeadingHash(window.location.hash))
      if (headingElement) {
        scrollToElement(headingElement)
      }
    }
  }, [])

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

  if (!headings.length) return null

  return (
    <AnimatePresence>
      {headings.length > 0 && (
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
          <Box
            bg="bg.subtle"
            borderStyle="solid"
            borderColor="border.muted"
            borderWidth={1}
            borderRadius="sm"
            fontSize="sm"
            ml={5}
            width="25ch"
            padding={5}
          >
            <Stack gap={5}>
              <TextLink href="#top" fontSize="sm" color="fg.muted" variant="plain" onClick={handleClick}>
                Table of contents
              </TextLink>
              {headings.map((heading) => (
                <TextLink key={heading.id} href={`#${heading.id}`} fontSize="xs" variant="plain" onClick={handleClick}>
                  <Text as="span" truncate>
                    {heading.innerText}
                  </Text>
                </TextLink>
              ))}
            </Stack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function scrollToElement(element: HTMLElement) {
  window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' })
}

function stripLeadingHash(id: string) {
  return id.replace(/^#/, '')
}
