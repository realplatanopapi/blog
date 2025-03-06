import { PropsWithChildren } from 'react'

import { Shell } from '@/features/layouts'

export default function BlogLayout({ children }: PropsWithChildren) {
  return <Shell>{children}</Shell>
}
