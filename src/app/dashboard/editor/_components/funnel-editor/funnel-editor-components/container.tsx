"use client"
import { Badge } from "@/components/ui/badge"
import { EditorBtns, defaultStyles } from "@/lib/constants"
import { EditorElement, useEditor } from "@/providers/editor/editor-provider"
import clsx from "clsx"
import React from "react"
import { v4 } from "uuid"
import Recursive from "./recursive"
import { Trash } from "lucide-react"
import { cn, findEditorElementById } from "@/lib/utils"
import PolymorphicComponent from "@/components/global/polymorphic-component"
import {
  basicAccordionElementData,
  borderedAccordionElementData,
  borderOnlyWhenActiveAccordionElementData,
  nestedAccordionElementData,
  openAccordionElementData,
} from "@/lib/elements/accordion-element-data"

type Props = { element: EditorElement }

const Container = ({ element }: Props) => {
  const { id, content, name, styles, type, componentProps } = element
  const { dispatch, state } = useEditor()

  const handleOnDrop = (e: React.DragEvent, id: string) => {
    e.stopPropagation()

    const componentType = e.dataTransfer.getData("componentType") as EditorBtns
    const componentId = e.dataTransfer.getData("componentId") as EditorBtns

    if (componentId && id) {
      const elem = findEditorElementById(state.editor.elements, componentId)
      if (!elem) return
      dispatch({
        type: "ADD_ELEMENT",
        payload: {
          containerId: id,
          elementDetails: { ...elem },
        },
      })
      return
    }

    switch (componentType) {
      case "text":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "Text Element" },
              id: v4(),
              name: "Text",
              styles: {
                color: "black",
                ...defaultStyles,
              },
              type: "text",
            },
          },
        })
        break
      case "h1":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "H1 Element" },
              id: v4(),
              name: "H1",
              styles: {
                ...defaultStyles,
              },
              type: "h1",
            },
          },
        })
        break
      case "h2":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "H2 Element" },
              id: v4(),
              name: "H2",
              styles: {
                ...defaultStyles,
              },
              type: "h2",
            },
          },
        })
        break
      case "h3":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "H3 Element" },
              id: v4(),
              name: "H3",
              styles: {
                ...defaultStyles,
              },
              type: "h3",
            },
          },
        })
        break

      case "h4":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "H4 Element" },
              id: v4(),
              name: "H4",
              styles: {
                ...defaultStyles,
              },
              type: "h4",
            },
          },
        })
        break

      case "h5":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "H5 Element" },
              id: v4(),
              name: "H5",
              styles: {
                ...defaultStyles,
              },
              type: "h5",
            },
          },
        })
        break

      case "h6":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "H6 Element" },
              id: v4(),
              name: "H6",
              styles: {
                ...defaultStyles,
              },
              type: "h6",
            },
          },
        })
        break

      case "p":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "Paragraph Element" },
              id: v4(),
              name: "Paragraph",
              styles: {
                ...defaultStyles,
              },
              type: "p",
            },
          },
        })
        break

      case "blockquote":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "Blockquote Element" },
              id: v4(),
              name: "Blockquote",
              styles: {
                ...defaultStyles,
              },
              type: "blockquote",
            },
          },
        })
        break
      case "link":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: {
                innerText: "Link Element",
                href: "#",
              },
              id: v4(),
              name: "Link",
              styles: {
                color: "black",
                ...defaultStyles,
              },
              type: "link",
            },
          },
        })
        break
      case "video":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: {
                src: "https://www.youtube.com/embed/A3l6YYkXzzg?si=zbcCeWcpq7Cwf8W1",
              },
              id: v4(),
              name: "Video",
              styles: {},
              type: "video",
            },
          },
        })
        break
      case "container":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Container",
              styles: { ...defaultStyles },
              type: "container",
            },
          },
        })
        break
      case "contactForm":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Contact Form",
              styles: {},
              type: "contactForm",
            },
          },
        })
        break
      case "paymentForm":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Contact Form",
              styles: {},
              type: "paymentForm",
            },
          },
        })
        break
      case "2Col":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [
                {
                  content: [],
                  id: v4(),
                  name: "Container",
                  styles: { ...defaultStyles, width: "100%" },
                  type: "container",
                },
                {
                  content: [],
                  id: v4(),
                  name: "Container",
                  styles: { ...defaultStyles, width: "100%" },
                  type: "container",
                },
              ],
              id: v4(),
              name: "Two Columns",
              styles: { ...defaultStyles, display: "flex" },
              type: "2Col",
            },
          },
        })
        break

      case "basicAccordion":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: basicAccordionElementData,
          },
        })
        break
      case "openAccordion":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: openAccordionElementData,
          },
        })
        break
      case "nestedAccordion":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: nestedAccordionElementData,
          },
        })
        break
      case "borderedAccordion":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: borderedAccordionElementData,
          },
        })
        break
      case "borderOnlyWhenActiveAccordion":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: borderOnlyWhenActiveAccordionElementData,
          },
        })
        break
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDragStart = (e: React.DragEvent, type: string, id: string) => {
    e.stopPropagation()
    if (type === "__body") return
    e.dataTransfer.setData("componentType", type)
    e.dataTransfer.setData("componentId", id)
  }

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation()
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    })
  }

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: {
        elementDetails: element,
      },
    })
  }

  const elementType = element.htmlContainerElement

  return (
    <PolymorphicComponent
      as={elementType}
      style={styles}
      id={element.id || ""}
      className={cn(
        "relative transition-all p-2",
        {
          "max-w-full w-full": type === "container" || type === "2Col",
          "h-fit": type === "container",
          "h-full": type === "__body",
          "overflow-scroll ": type === "__body",
          "flex flex-col md:!flex-row": type === "2Col",
          "!border-blue-500":
            state.editor.selectedElement.id === id &&
            !state.editor.liveMode &&
            state.editor.selectedElement.type !== "__body",
          "!border-yellow-400 !border-4":
            state.editor.selectedElement.id === id &&
            !state.editor.liveMode &&
            state.editor.selectedElement.type === "__body",
          "!border-solid":
            state.editor.selectedElement.id === id && !state.editor.liveMode,
          "border-dashed border-[1px] border-slate-300": !state.editor.liveMode,
        },
        element.className || ""
      )}
      onDrop={(e: any) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
      onDragStart={(e: any) =>
        handleDragStart(e, element.type || "container", id)
      }
      {...componentProps}
    >
      <Badge
        className={clsx(
          "absolute -top-[23px] -left-[1px] rounded-none rounded-t-lg hidden",
          {
            block:
              state.editor.selectedElement.id === element.id &&
              !state.editor.liveMode,
          }
        )}
      >
        {element.name}
      </Badge>

      {Array.isArray(content) &&
        content.map((childElement) => (
          <Recursive key={childElement.id} element={childElement} />
        ))}

      {state.editor.selectedElement.id === element.id &&
        !state.editor.liveMode &&
        state.editor.selectedElement.type !== "__body" && (
          <div className="absolute z-10 bg-primary px-2.5 py-1 text-xs font-bold  -top-[25px] -right-[1px] rounded-none rounded-t-lg text-primary-foreground">
            <Trash size={16} onClick={handleDeleteElement} />
          </div>
        )}
    </PolymorphicComponent>
  )
}

export default Container
