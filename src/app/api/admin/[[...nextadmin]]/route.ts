import { createHandler } from '@premieroctet/next-admin/appHandler'

import { dbClient } from '@/lib/db'

const { run } = createHandler({
  apiBasePath: '/api/admin',
  prisma: dbClient,
})

export { run as DELETE, run as GET, run as POST }
