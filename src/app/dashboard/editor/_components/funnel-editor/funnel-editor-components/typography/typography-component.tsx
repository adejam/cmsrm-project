'use client'
import PolymorphicComponent from '@/components/global/polymorphic-component'
import { Badge } from '@/components/ui/badge'
import { EditorBtns } from '@/lib/constants'
import { cn } from '@/lib/utils'

import { EditorElement, useEditor } from '@/providers/editor/editor-provider'
import clsx from 'clsx'
import { Trash } from 'lucide-react'
import Link from 'next/link'

import React, { useRef } from 'react'

type Props = {
  element: EditorElement
}

const TypographyComponent = (props: Props) => {
  const { dispatch, state } = useEditor()

  // const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
  //   if (type === null) return
  //   e.dataTransfer.setData('componentType', type)
  // }

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: 'CHANGE_CLICKED_ELEMENT',
      payload: {
        elementDetails: props.element,
      },
    })
  }

  const styles = props.element.styles

  const handleDeleteElement = () => {
    dispatch({
      type: 'DELETE_ELEMENT',
      payload: { elementDetails: props.element },
    })
  }

  let defaultClasses = ''

  switch (props.element.type) {
    case 'h1':
      defaultClasses = 'text-5xl font-extrabold dark:text-white'
      break;
    case 'h2':
      defaultClasses = 'text-4xl font-bold dark:text-white'
      break;

      case 'h3':
        defaultClasses = 'text-3xl font-bold dark:text-white'
        break;
        case 'h4':
      defaultClasses = 'text-2xl font-bold dark:text-white'
      break;
      case 'h5':
      defaultClasses = 'text-xl font-bold dark:text-white'
      break;
      case 'h6':
      defaultClasses = 'text-lg font-bold dark:text-white'
      break;
      case 'p':
      defaultClasses = 'text-gray-500 dark:text-gray-400'
      break;
    default:
      defaultClasses = ''
      break;
  }

  return (
    <div
      style={styles}
      draggable
      onClick={handleOnClickBody}
      className={clsx(
        'p-[2px] w-full m-[5px] relative text-[16px] transition-all',
        {
          '!border-blue-500':
            state.editor.selectedElement.id === props.element.id,

          '!border-solid': state.editor.selectedElement.id === props.element.id,
          'border-dashed border-[1px] border-slate-300': !state.editor.liveMode,
        }
      )}
    >
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <Badge className="absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg ">
            {state.editor.selectedElement.name}
          </Badge>
        )}
        <PolymorphicComponent
          as={props.element.type}
          className={cn(defaultClasses, props.element.className || '')}
          contentEditable={!state.editor.liveMode}
          onBlur={(e: any) => {
            const spanElement = e.target as HTMLSpanElement
            dispatch({
              type: 'UPDATE_ELEMENT',
              payload: {
                elementDetails: {
                  ...props.element,
                  content: {
                    innerText: spanElement.innerText,
                  },
                },
              },
            })
          }}
        >
          {!Array.isArray(props.element.content) &&
            props.element.content.innerText}
        </PolymorphicComponent>
      {state.editor.selectedElement.id === props.element.id &&
        !state.editor.liveMode && (
          <div className="absolute bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg !text-white">
            <Trash
              className="cursor-pointer"
              size={16}
              onClick={handleDeleteElement}
            />
          </div>
        )}
    </div>
  )
}

export default TypographyComponent
