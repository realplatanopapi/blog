'use client'

import { Content, EditorContent, useEditor, UseEditorOptions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const extensions = [StarterKit]

export type EditorOnUpdate = UseEditorOptions['onUpdate']

export interface EditorProps {
  initialContent?: Content
  onUpdate?: EditorOnUpdate
}

export function Editor({ initialContent = '', onUpdate }: EditorProps) {
  const editor = useEditor({
    extensions,
    content: initialContent,
    onUpdate,
  })

  return <EditorContent editor={editor} />
}
