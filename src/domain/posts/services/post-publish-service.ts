import { Post } from '@prisma/client'

import { dbClient } from '@/lib/db'

export class PostPublishService {
  static async publish(post: Post) {
    if (post.published) {
      throw new Error('Post is already published')
    }

    return dbClient.post.update({
      where: { id: post.id },
      data: { published: true },
    })
  }

  static async unpublish(post: Post) {
    if (!post.published) {
      throw new Error('Post is not published')
    }

    return dbClient.post.update({
      where: { id: post.id },
      data: { published: false },
    })
  }
}
