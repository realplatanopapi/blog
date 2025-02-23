import { LandingView } from '@/features/landing/views/landing-view'
import { dbClient } from '@/lib/db'

export default async function Home() {
  const posts = await dbClient.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return <LandingView posts={posts} />
}

export const dynamic = 'force-dynamic'
