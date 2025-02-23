import { NextAdminOptions } from '@premieroctet/next-admin'
import { Post } from '@prisma/client'

import { PostPublishService } from '@/domain/posts'
import { PostContentInput } from '@/features/admin/components'
import { dbClient } from '@/lib/db'

export const adminOptions: NextAdminOptions = {
  title: '⚡️ Blog',
  model: {
    Post: {
      toString: (post) => `${post.title}`,
      title: 'Posts',
      icon: 'NewspaperIcon',
      permissions: ['edit', 'delete', 'create'],
      list: {
        display: ['title', 'published', 'id', 'createdAt', 'updatedAt'],
        search: ['title'],
      },
      edit: {
        fields: {
          content: {
            input: <PostContentInput />,
          },
        },
        display: ['title', 'published', 'content', 'id'],
      },
      actions: [
        {
          title: 'Publish',
          icon: 'EnvelopeIcon',
          type: 'server',
          id: 'publish',
          canExecute: (model) => {
            const post = model as Post
            return !post.published
          },
          action: async (ids) => {
            const postIds = ids as string[]
            const postsToPublish = await dbClient.post.findMany({
              where: {
                id: { in: postIds },
              },
            })

            await Promise.all(postsToPublish.map((post) => PostPublishService.publish(post)))

            return {
              type: 'success',
              message: 'Post published successfully',
            }
          },
        },
        {
          title: 'Unpublish',
          icon: 'EnvelopeIcon',
          type: 'server',
          id: 'unpublish',
          canExecute: (model) => {
            const post = model as Post
            return post.published
          },
          action: async (ids) => {
            const postIds = ids as string[]
            const postsToUnpublish = await dbClient.post.findMany({
              where: {
                id: { in: postIds },
              },
            })

            await Promise.all(postsToUnpublish.map((post) => PostPublishService.unpublish(post)))

            return {
              type: 'success',
              message: 'Post unpublished successfully',
            }
          },
        },
      ],
    },
  },
  defaultColorScheme: 'dark',
}
