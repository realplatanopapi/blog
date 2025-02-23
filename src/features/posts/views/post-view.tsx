'use client'

import type { Post } from '@prisma/client'
import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { useMemo } from 'react'

import { Container, Content, Heading, Prose, Stack } from '@/components'

interface PostViewProps {
  post: Post
}

export function PostView({ post }: PostViewProps) {
  const html = useMemo(() => {
    return generateHTML(post.content as Content, [StarterKit])
  }, [post.content])

  return (
    <Container maxWidth="prose">
      <Stack as="article">
        <Heading as="h1" textAlign="center" size="2xl">
          {post.title}
        </Heading>
        <Prose dangerouslySetInnerHTML={{ __html: html }} />
      </Stack>
    </Container>
  )
}
