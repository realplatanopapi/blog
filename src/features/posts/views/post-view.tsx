'use client'

import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { useMemo } from 'react'

import { Container, Content, Heading, LogoIcon, LogoLink, Prose, Stack } from '@/components'

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
    <Container maxWidth="prose">
      <Stack as="article">
        <LogoLink>
          <LogoIcon />
        </LogoLink>
        <Heading as="h1" textAlign="center" size="3xl">
          {post.title}
        </Heading>
        <Prose dangerouslySetInnerHTML={{ __html: html }} />
      </Stack>
    </Container>
  )
}
