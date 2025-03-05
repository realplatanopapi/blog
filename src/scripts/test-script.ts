import { Script } from '@/scripts/util/script'

export default class TestScript implements Script {
  async run() {
    console.info('yeeurr')
  }
}
