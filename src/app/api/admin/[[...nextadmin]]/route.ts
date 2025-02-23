import { createHandler } from '@premieroctet/next-admin/appHandler'

import { adminOptions } from '@/features/admin'
import { dbClient, PlainDBClient } from '@/lib/db'

const { run } = createHandler({
  apiBasePath: '/api/admin',
  prisma: dbClient as unknown as PlainDBClient,
  options: adminOptions,
})

export const DELETE = run
export const GET = run
export const POST = run
