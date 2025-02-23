'use client'

import './post-renderer.css'

import { generateHTML } from '@tiptap/html'
import StarterKit from '@tiptap/starter-kit'
import { useMemo } from 'react'
import Highlight from 'react-highlight'

import { Content, Prose } from '@/components'

interface PostRendererProps {
  content: Content
}

export function PostRenderer({ content }: PostRendererProps) {
  const html = useMemo(() => {
    return generateHTML(content, [StarterKit])
  }, [content])

  return (
    <Prose className="post-renderer">
      <Highlight innerHTML={true}>{html}</Highlight>
    </Prose>
  )
}
