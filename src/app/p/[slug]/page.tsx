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

  return <PostView post={post} />
}
