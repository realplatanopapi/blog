import '@/styles/global.css'

import { NextAdmin, PageProps as NextAdminPageProps } from '@premieroctet/next-admin'
import { getNextAdminProps } from '@premieroctet/next-admin/appRouter'

import { options } from '@/features/admin'
import { dbClient } from '@/lib/db'
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
    prisma: dbClient,
    options,
  })

  return <NextAdmin {...adminProps} />
}
