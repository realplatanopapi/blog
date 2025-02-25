'use client'

import dynamic from 'next/dynamic'

export const HighlightCodeLazy = dynamic(() => import('./highlight-code').then((mod) => mod.HighlightCode), {
  ssr: false,
})
