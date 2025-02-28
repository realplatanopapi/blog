import { NextAdminOptions } from '@premieroctet/next-admin'
import { Post, Prisma } from '@prisma/client'
import slugify from '@sindresorhus/slugify'

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
        display: ['title', 'published', 'slug', 'id', 'createdAt', 'updatedAt'],
        search: ['title', 'subtitle'],
      },
      edit: {
        fields: {
          content: {
            input: <PostContentInput />,
          },
        },
        display: ['title', 'slug', 'subtitle', 'published', 'content', 'id'],
        hooks: {
          beforeDb: async (data, mode) => {
            const postData = data as unknown as Prisma.PostCreateInput
            if (mode === 'create') {
              const slug = slugify(postData.title, {
                lowercase: true,
              })

              data.slug = slug
            }

            return data
          },
        },
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
