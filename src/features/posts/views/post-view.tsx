'use client'

import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { useMemo } from 'react'

import { Content, Heading, LogoIcon, LogoLink, Prose, Stack, Text, TextLink } from '@/components'

interface PostViewProps {
  post: {
    title: string
    content: Content
  }
}

export function PostView({ post }: PostViewProps) {
  const html = useMemo(() => {
    return generateHTML(post.content as Content, [StarterKit])
  }, [post.content])

  return (
    <Stack gap={4}>
      <LogoLink>
        <LogoIcon />
      </LogoLink>
      <Stack as="article" gap={4}>
        <Heading as="h1" textAlign="center" size="3xl">
          {post.title}
        </Heading>
        <Prose dangerouslySetInnerHTML={{ __html: html }} size="lg" />
      </Stack>
      <Stack py={4} borderTop="1px" borderTopColor="border.subtle" borderTopStyle="solid">
        <Text color="fg.muted">
          Like what you see? <TextLink href="/">Read more here.</TextLink>
        </Text>
      </Stack>
    </Stack>
  )
}
