'use client'

import { CustomInputProps } from '@premieroctet/next-admin'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'

import { Editor, EditorOnUpdate } from '@/components/editor/editor'
import { Content } from '@/components/editor/types'

export function PostContentInput(props: CustomInputProps) {
  const initialContent: Content = useMemo(() => {
    return JSON.parse(props.value ?? '{}')
  }, [props.value])

  const [currentContent, setCurrentContent] = useState(initialContent)
  const currentContentString = useMemo(() => {
    return JSON.stringify(currentContent)
  }, [currentContent])

  useEffect(() => {
    props.onChange?.({
      target: {
        value: currentContentString,
      },
    } as ChangeEvent<HTMLInputElement>)
  }, [currentContentString])

  const onChange: EditorOnUpdate = (updateProps) => {
    const newContent = updateProps.editor.getJSON()
    setCurrentContent(newContent)
  }

  return (
    <>
      <Editor content={initialContent as Content} onUpdate={onChange} />
      <input type="hidden" name={props.name} value={currentContentString} />
    </>
  )
}
