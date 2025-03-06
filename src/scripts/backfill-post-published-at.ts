import { dbClient } from '@/lib/db'
import { Script } from '@/scripts/util/script'

export default class BackfillPostPublishedAt implements Script {
  async run() {
    const posts = await dbClient.post.findMany({
      where: {
        published: true,
        publishedAt: null,
      },
    })

    for (const post of posts) {
      await dbClient.post.update({
        where: { id: post.id },
        data: { publishedAt: post.createdAt },
      })
    }

    console.info(`Updated ${posts.length} posts`)
  }
}
