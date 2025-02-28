import { createHandler } from '@premieroctet/next-admin/appHandler'
import { NextResponse } from 'next/server'

import { adminOptions } from '@/features/admin'
import { authorize } from '@/lib/auth/authorize'
import { dbClient, PlainDBClient } from '@/lib/db'

const { run } = createHandler({
  apiBasePath: '/api/admin',
  prisma: dbClient as unknown as PlainDBClient,
  onRequest: async () => {
    const session = await authorize()
    if (session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  },
  options: adminOptions,
})

export const DELETE = run
export const GET = run
export const POST = run
