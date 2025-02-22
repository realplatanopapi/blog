import { cleanEnv, Spec, str } from 'envalid'

const publicConfigSchema = {
  NODE_ENV: str({ choices: ['development', 'production'] }),
} satisfies Record<string, Spec<unknown>>

const processEnvMap: Record<keyof typeof publicConfigSchema, string | undefined> = {
  NODE_ENV: process.env.NODE_ENV,
}

export const publicConfig = cleanEnv(processEnvMap, publicConfigSchema)
