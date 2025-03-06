import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Content } from '@/components/editor/types'
import { PostView } from '@/features/posts/views/post-view'
import { dbClient } from '@/lib/db'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params

  const now = new Date()
  const post = await dbClient.post.findFirstOrThrow({
    where: {
      slug,
      publishedAt: {
        lte: now,
      },
    },
  })

  return {
    title: post.title,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const now = new Date()
  const post = await dbClient.post.findFirst({
    where: {
      slug,
      publishedAt: {
        lte: now,
      },
    },
  })

  if (!post) {
    notFound()
  }

  return (
    <PostView
      post={{
        title: post.title,
        subtitle: post.subtitle,
        content: post.content as Content,
        publishedAt: post.createdAt,
      }}
    />
  )
}

export const dynamic = 'force-dynamic'
