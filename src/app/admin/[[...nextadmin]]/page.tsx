import { NextAdmin, PageProps as NextAdminPageProps } from '@premieroctet/next-admin'
import { getNextAdminProps } from '@premieroctet/next-admin/appRouter'

import { adminOptions } from '@/features/admin'
import { dbClient, PlainDBClient } from '@/lib/db'
interface AdminPageProps {
  params: Promise<NextAdminPageProps['params']>
  searchParams: Promise<NextAdminPageProps['searchParams']>
}

export default async function AdminPage(props: AdminPageProps) {
  const params = await props.params
  const searchParams = await props.searchParams

  const adminProps = await getNextAdminProps({
    params: params.nextadmin,
    searchParams,
    basePath: '/admin',
    apiBasePath: '/api/admin',
    prisma: dbClient as unknown as PlainDBClient,
    options: adminOptions,
  })

  return <NextAdmin {...adminProps} />
}
