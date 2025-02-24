// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'coquito',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    }
  },
  async run() {
    // Setup networking
    const vpc = new sst.aws.Vpc('CoquitoVpc', {
      bastion: true,
    })

    // Setup database
    const postgres = new sst.aws.Postgres('CoquitoPostgres', {
      vpc,
      version: '17.2',
      database: 'coquito',
      dev: {
        host: 'localhost',
        port: 5432,
        username: 'blog',
        password: 'password',
        database: 'blog',
      },
    })
    const DATABASE_URL = $interpolate`postgresql://${postgres.username}:${postgres.password}@${postgres.host}:${postgres.port}/${postgres.database}`

    // Commands
    new sst.x.DevCommand('Database', {
      environment: { DATABASE_URL },
      dev: {
        autostart: false,
      },
    })

    // Setup service for the app
    const cluster = new sst.aws.Cluster('CoquitoCluster', { vpc })
    new sst.aws.Service('CoquitoService', {
      cluster,
      link: [postgres],
      environment: {
        DATABASE_URL,
      },
      loadBalancer: {
        ports: [{ listen: '80/http', forward: '3000/http' }],
      },
      dev: {
        command: 'pnpm dev',
      },
    })
  },
})
