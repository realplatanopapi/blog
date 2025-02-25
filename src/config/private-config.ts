import { cleanEnv, str } from 'envalid'

import { publicConfig } from './public-config'

export const privateConfig = {
  ...publicConfig,
  ...cleanEnv(process.env, {
    ADMIN_PASSWORD: str(),
    ADMIN_USERNAME: str(),
    DATABASE_URL: str(),
    SESSION_SECRET: str(),
  }),
}
