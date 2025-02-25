'use client'

import './highlight-code.css'

import hljs from 'highlight.js/lib/core'
import graphql from 'highlight.js/lib/languages/graphql'
import python from 'highlight.js/lib/languages/python'
import typescript from 'highlight.js/lib/languages/typescript'
import { PropsWithChildren, useEffect } from 'react'

hljs.configure({
  ignoreUnescapedHTML: true,
})

hljs.registerLanguage('graphql', graphql)
hljs.registerLanguage('python', python)
hljs.registerLanguage('typescript', typescript)

interface HighlightCodeProps extends PropsWithChildren {}

export function HighlightCode({ children }: HighlightCodeProps) {
  useEffect(() => {
    hljs.highlightAll()

    return () => {
      if (typeof document !== 'undefined') {
        document.querySelectorAll('pre code').forEach((element) => {
          delete (element as HTMLElement).dataset.highlighted
        })
      }
    }
  }, [])

  return <>{children}</>
}
