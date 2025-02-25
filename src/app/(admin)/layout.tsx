import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { authorize } from '@/lib/auth/authorize'

export default async function AdminLayout({ children }: PropsWithChildren) {
  const username = await authorize()
  if (!username) {
    return redirect('/auth')
  }

  return <>{children}</>
}
