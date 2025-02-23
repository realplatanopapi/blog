'use client'

import './editor.css'

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
        class: 'prose prose-md dark:prose-invert py-2 px-4 border border-solid border-slate-700 rounded-md',
      },
    },
  })

  return <EditorContent editor={editor} />
}
