'use client'

import type { Post } from '@prisma/client'

import { Content, Editor } from '@/components/editor'

interface PostViewProps {
  post: Post
}

export function PostView({ post }: PostViewProps) {
  return <Editor content={post.content as Content} editable={false} />
}
