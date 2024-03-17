import { EditorElement } from "@/providers/editor/editor-provider"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { nanoid } from "nanoid"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function regenerateIds(element: EditorElement): EditorElement {
  // Update the ID of the current element
  const newId = nanoid()
  element.id = newId

  // If the current element has content and it's an array, recursively update IDs
  if (element.content && Array.isArray(element.content)) {
    element.content = element.content.map((child) => regenerateIds(child))
  }

  return element
}

export function findEditorElementById(
  data: EditorElement[],
  id: string
): EditorElement | undefined {
  const elem = structuredClone(data)
  for (const element of elem) {
    // Check if the current element's id matches the target id
    if (element.id === id) {
      return { ...regenerateIds({ ...element }) }
    }

    // If the current element has content and it's an array, recursively search through it
    if (element.content && Array.isArray(element.content)) {
      const result = findEditorElementById(element.content, id)
      if (result) {
        return { ...regenerateIds({ ...result }) }
      }
    }
  }

  // If the element is not found, return undefined
  return undefined
}
