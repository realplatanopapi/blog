'use client'

import { CustomInputProps } from '@premieroctet/next-admin'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'

import { Button, DialogBody, DialogContent, DialogRoot, DialogTrigger, Flex } from '@/components'
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
      <DialogRoot size="xl" scrollBehavior="inside">
        <DialogTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogBody>
            <Flex justifyContent="center" alignItems="center" height="100%" py={5}>
              <Editor content={initialContent as Content} onUpdate={onChange} />
            </Flex>
          </DialogBody>
        </DialogContent>
      </DialogRoot>
      <input type="hidden" name={props.name} value={currentContentString} />
    </>
  )
}
