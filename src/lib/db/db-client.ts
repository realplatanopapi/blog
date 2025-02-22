import { PrismaClient } from '@prisma/client'

import { privateConfig } from '@/config/private-config'

function createDBClient() {
  return new PrismaClient({
    datasourceUrl: privateConfig.DATABASE_URL,
  })
}

type DBClient = ReturnType<typeof createDBClient>

const globalForDBClient = global as unknown as {
  dbClient: DBClient
}

export const dbClient = globalForDBClient.dbClient || createDBClient()

if (process.env.NODE_ENV !== 'production') globalForDBClient.dbClient = dbClient
