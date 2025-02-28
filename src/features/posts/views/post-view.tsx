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
        <Stack gap={1}>
          <Text textAlign="center" fontSize="sm" color="fg.subtle">
            {post.publishedAt.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
          <Heading as="h1" textAlign="center" size="3xl">
            {post.title}
          </Heading>
        </Stack>
        {!isEmpty(post.subtitle) && (
          <Text color="fg.muted" textAlign="center" mx="auto" maxWidth="40ch">
            {post.subtitle}
          </Text>
        )}
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
