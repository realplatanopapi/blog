'use client'

import { isEmpty } from 'lodash-es'

import { Content, Heading, LogoIcon, LogoLink, Stack, Text, TextLink } from '@/components'
import { PostRenderer, TableOfContents } from '@/features/posts/components'

interface PostViewProps {
  post: {
    title: string
    subtitle: string | null
    content: Content
    publishedAt: Date
  }
}

export function PostView({ post }: PostViewProps) {
  return (
    <Stack gap={4}>
      <LogoLink>
        <LogoIcon />
      </LogoLink>
      <TableOfContents />
      <Stack as="article" gap={4}>
        <Stack gap={2}>
          <Heading as="h1" textAlign="center" size="3xl">
            {post.title}
          </Heading>
          {!isEmpty(post.subtitle) && (
            <Text color="fg.muted" textAlign="center" mx="auto">
              {post.subtitle}
            </Text>
          )}
          <Text textAlign="center" fontSize="sm" color="fg.subtle">
            {post.publishedAt.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </Stack>
        <PostRenderer content={post.content as Content} />
      </Stack>
      <Stack py={4} borderTop="1px" borderTopColor="border.subtle" borderTopStyle="solid">
        <Text color="fg.muted">
          Like what you see? <TextLink href="/">Read more here.</TextLink>
        </Text>
      </Stack>
    </Stack>
  )
}
