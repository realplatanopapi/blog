import { Post } from '@prisma/client'

import { dbClient } from '@/lib/db'

export class PostPublishService {
  static async publish(post: Post) {
    if (post.publishedAt) {
      throw new Error('Post is already published')
    }

    return dbClient.post.update({
      where: { id: post.id },
      data: { publishedAt: new Date() },
    })
  }

  static async unpublish(post: Post) {
    if (!post.publishedAt) {
      throw new Error('Post is not published')
    }

    return dbClient.post.update({
      where: { id: post.id },
      data: { publishedAt: null },
    })
  }
}
