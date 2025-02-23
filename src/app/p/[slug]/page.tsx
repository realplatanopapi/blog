import { Content } from '@/components/editor/types'
import { PostView } from '@/features/posts/views/post-view'
import { dbClient } from '@/lib/db'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params

  const post = await dbClient.post.findFirstOrThrow({
    where: {
      slug,
    },
  })

  return (
    <PostView
      post={{
        title: post.title,
        content: post.content as Content,
      }}
    />
  )
}

export const dynamic = 'force-dynamic'
