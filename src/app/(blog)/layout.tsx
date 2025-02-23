import { PropsWithChildren } from 'react'

import { BlogShell } from '@/features/layouts'

export default function BlogLayout({ children }: PropsWithChildren) {
  return <BlogShell>{children}</BlogShell>
}
