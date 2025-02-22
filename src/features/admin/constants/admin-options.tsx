import { NextAdminOptions } from '@premieroctet/next-admin'

export const options: NextAdminOptions = {
  title: '⚡️ Blog',
  model: {
    Post: {
      toString: (post) => `${post.title}`,
      title: 'Posts',
      icon: 'NewspaperIcon',
      permissions: ['edit', 'delete', 'create'],
      list: {
        exports: [
          { format: 'CSV', url: '/api/posts/export?format=csv' },
          { format: 'JSON', url: '/api/posts/export?format=json' },
        ],
        display: ['title', 'id', 'createdAt', 'updatedAt'],
        search: ['title'],
      },
      edit: {
        fields: {
          document: {
            format: 'richtext-html',
          },
        },
        display: ['id', 'title', 'document'],
      },
    },
  },
  defaultColorScheme: 'dark',
}
