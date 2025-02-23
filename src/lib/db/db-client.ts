import { PrismaClient } from '@prisma/client'

import { privateConfig } from '@/config/private-config'

import { postExtension } from './extensions/post'

function createDBClient() {
  return new PrismaClient({
    datasourceUrl: privateConfig.DATABASE_URL,
  }).$extends(postExtension)
}

type DBClient = ReturnType<typeof createDBClient>
export type PlainDBClient = PrismaClient

const globalForDBClient = global as unknown as {
  dbClient: DBClient
}

export const dbClient = globalForDBClient.dbClient || createDBClient()

if (process.env.NODE_ENV !== 'production') globalForDBClient.dbClient = dbClient
