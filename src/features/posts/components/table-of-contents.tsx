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
      heading.id = heading.innerText.toLowerCase().replace(/ /g, '-')
    })
    setHeadings(Array.from(headings))
  }, [])

  const handleClick: React.HTMLAttributes<HTMLAnchorElement>['onClick'] = (event) => {
    const target = event.currentTarget
    const href = target.getAttribute('href')
    if (!href) return

    const headingId = href.replace('#', '')
    const headingElement = document.getElementById(headingId)

    if (headingElement) {
      event.preventDefault()
      window.scrollTo({
        top: headingElement.offsetTop - 100,
        behavior: 'smooth',
      })
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
