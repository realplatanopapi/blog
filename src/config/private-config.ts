import { cleanEnv, str } from 'envalid'

import { publicConfig } from './public-config'

export const privateConfig = {
  ...publicConfig,
  ...cleanEnv(process.env, {
    DATABASE_URL: str(),
  }),
}
