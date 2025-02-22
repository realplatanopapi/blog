import { createHandler } from '@premieroctet/next-admin/appHandler'

import { dbClient } from '@/lib/db'

const { run } = createHandler({
  apiBasePath: '/api/admin',
  prisma: dbClient,
})

export const DELETE = run
export const GET = run
export const POST = run
