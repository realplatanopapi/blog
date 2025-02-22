'use client'

import { CustomInputProps } from '@premieroctet/next-admin'
import { useMemo, useState } from 'react'

import { Editor, EditorOnUpdate } from '@/components/editor/editor'

export function PostContentInput(props: CustomInputProps) {
  const initialContent: object = useMemo(() => {
    return JSON.parse(props.value ?? '{}')
  }, [props.value])

  const [currentContent, setCurrentContent] = useState(initialContent)
  const currentContentString = useMemo(() => {
    return JSON.stringify(currentContent)
  }, [currentContent])

  const onChange: EditorOnUpdate = (updateProps) => {
    const newContent = updateProps.editor.getJSON()
    setCurrentContent(newContent)
  }

  return (
    <>
      <Editor initialContent={initialContent} onUpdate={onChange} />
      <input type="hidden" name={props.name} value={currentContentString} />
    </>
  )
}
