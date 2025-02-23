'use client'

import { Content, Heading, LogoIcon, LogoLink, Stack, Text, TextLink } from '@/components'
import { PostRenderer } from '@/features/posts/components'

interface PostViewProps {
  post: {
    title: string
    content: Content
  }
}

export function PostView({ post }: PostViewProps) {
  return (
    <Stack gap={4}>
      <LogoLink>
        <LogoIcon />
      </LogoLink>
      <Stack as="article" gap={4}>
        <Heading as="h1" textAlign="center" size="3xl">
          {post.title}
        </Heading>
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
