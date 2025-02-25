'use client'

import { generateHTML } from '@tiptap/html'
import { StarterKit } from '@tiptap/starter-kit'
import { useMemo } from 'react'
import sanitizeHtml from 'sanitize-html'

import { Content, Prose } from '@/components'
import { HighlightCodeLazy } from '@/components/ui/highlight-code/highlight-code-lazy'

interface PostRendererProps {
  content: Content
}

export function PostRenderer({ content }: PostRendererProps) {
  const html = useMemo(() => {
    return sanitizeHtml(generateHTML(content, [StarterKit]))
  }, [content])

  return (
    <>
      <Prose className="post-renderer" dangerouslySetInnerHTML={{ __html: html }} />
      <HighlightCodeLazy />
    </>
  )
}
