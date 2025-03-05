import path from 'path'

import { Script } from '@/scripts/util/script'

async function runScript(scriptPath: string) {
  const absoluteScriptPath = path.resolve(process.cwd(), scriptPath)
  const scriptModule = await import(absoluteScriptPath)

  let ScriptClass: new () => Script

  if (scriptModule.default) {
    ScriptClass = scriptModule.default
  } else if (scriptModule.run) {
    ScriptClass = scriptModule
  } else {
    throw new Error(`Script ${scriptPath} does not export a run function`)
  }

  const script = new ScriptClass()
  return script.run()
}

const args = process.argv.slice(2)
const scriptPath = args.at(0)

if (!scriptPath) {
  console.error('No script path provided')
  process.exit(1)
}

runScript(scriptPath).catch((error) => {
  const stackLines: string[] = error.stack.split('\n')
  const filteredStack = stackLines.filter((line) => !line.includes('runner.ts'))
  error.stack = filteredStack.join('\n')

  console.error(error)
  process.exit(1)
})
