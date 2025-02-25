import { Prisma } from '@prisma/client'
import slugify from '@sindresorhus/slugify'

export const postExtension = Prisma.defineExtension({
  name: 'PostModel',
  result: {
    post: {
      url: {
        needs: {
          slug: true,
        },
        compute(post) {
          return new URL(`/${post.slug}`, 'http://localhost:3000').toString()
        },
      },
    },
  },
  query: {
    post: {
      async create({ args, query }) {
        const slug = slugify(args.data.title)
        return query({
          ...args,
          data: {
            ...args.data,
            slug,
          },
        })
      },
      async update({ args, query }) {
        const title = args.data.title
        if (typeof title !== 'string') {
          return query(args)
        }

        const slug = slugify(title)
        return query({
          ...args,
          data: { ...args.data, slug },
        })
      },
    },
  },
})
