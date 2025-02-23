'use client'

import { EditorContent, useEditor, UseEditorOptions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import { Content } from './types'

const extensions = [StarterKit]

export type EditorOnUpdate = UseEditorOptions['onUpdate']

export interface EditorProps {
  content?: Content
  onUpdate?: EditorOnUpdate
  editable?: boolean
}

export function Editor({ content = {}, editable = true, onUpdate }: EditorProps) {
  const editor = useEditor({
    extensions,
    content,
    editable,
    immediatelyRender: false,
    onUpdate,
    editorProps: {
      attributes: {
        class: 'prose prose-md focus:outline-none dark:prose-invert',
      },
    },
  })

  return <EditorContent editor={editor} />
}
