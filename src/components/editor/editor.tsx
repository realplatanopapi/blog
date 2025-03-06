'use client'

import './editor.css'

import Placeholder from '@tiptap/extension-placeholder'
import { BubbleMenu, EditorContent, useEditor, UseEditorOptions } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import cx from 'classix'

import { Content } from './types'

const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: 'Write something …',
  }),
]

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
        class:
          'prose prose-md dark:prose-invert p-6 border border-solid border-slate-700 mx-auto rounded-md focus:outline-none',
      },
    },
  })

  return (
    <>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bubble-menu">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cx(editor.isActive('bold') && 'is-active')}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={cx(editor.isActive('strike') && 'is-active')}
            >
              Strike
            </button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent className="editor" editor={editor} />
    </>
  )
}
