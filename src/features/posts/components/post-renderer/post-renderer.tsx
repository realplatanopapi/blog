import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { useMemo } from 'react'

import { Content, Prose } from '@/components'

interface PostRendererProps {
  content: Content
}

export function PostRenderer({ content }: PostRendererProps) {
  const html = useMemo(() => {
    return generateHTML(content, [StarterKit])
  }, [content])

  return <Prose dangerouslySetInnerHTML={{ __html: html }} />
}
