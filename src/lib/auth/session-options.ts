import { SessionOptions } from 'iron-session'

import { privateConfig } from '@/config/private-config'

export const sessionOptions = {
  cookieName: 'session',
  password: privateConfig.SESSION_SECRET,
  ttl: 60 * 60 * 24 * 14, // 14 days
  cookieOptions: {
    secure: privateConfig.isProduction,
  },
} satisfies SessionOptions
