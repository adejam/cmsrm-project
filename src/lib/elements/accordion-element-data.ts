import { defaultStyles } from "@/lib/constants"
import { EditorElement } from "@/providers/editor/editor-provider"
import { v4 } from "uuid"

export const basicAccordionElementData: EditorElement = {
  content: [
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #1" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the first item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #2" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the second item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #3" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the third item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
  ],
  id: v4(),
  name: "Accordion Wrapper",
  styles: { ...defaultStyles },
  type: "container",
  className: "hs-accordion-group",
}

export const openAccordionElementData: EditorElement = {
  content: [
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #1" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the first item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #2" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the second item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #3" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the third item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
  ],
  id: v4(),
  name: "Accordion Wrapper",
  styles: { ...defaultStyles },
  type: "container",
  className: "hs-accordion-group",
  componentProps: { "data-hs-accordion-always-open": true },
}

export const nestedAccordionElementData: EditorElement = {
  content: [
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #1" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              ...basicAccordionElementData,
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #2" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the second item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #3" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the third item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className: "hs-accordion",
    },
  ],
  id: v4(),
  name: "Accordion Wrapper",
  styles: { ...defaultStyles },
  type: "container",
  className: "hs-accordion-group",
}

export const borderedAccordionElementData: EditorElement = {
  content: [
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #1" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the first item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className:
        "hs-accordion first:rounded-t-lg last:rounded-b-lg border dark:border-gray-700",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #2" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the second item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className:
        "hs-accordion first:rounded-t-lg last:rounded-b-lg border dark:border-gray-700",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #3" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the third item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className:
        "hs-accordion first:rounded-t-lg last:rounded-b-lg border dark:border-gray-700",
    },
  ],
  id: v4(),
  name: "Accordion Wrapper",
  styles: { ...defaultStyles },
  type: "container",
  className: "hs-accordion-group",
}

export const borderOnlyWhenActiveAccordionElementData: EditorElement = {
  content: [
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #1" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the first item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className:
        "hs-accordion hs-accordion-active:border-gray-200 border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #2" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the second item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className:
        "hs-accordion hs-accordion-active:border-gray-200 border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700",
    },
    {
      content: [
        {
          content: [
            {
              content: { innerText: "Accordion #3" },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Trigger",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400",
          htmlContainerElement: "button",
        },
        {
          content: [
            {
              content: {
                innerText: "This is the third item's accordion body.",
              },
              id: v4(),
              name: "Accordion Text",
              styles: { ...defaultStyles },
              type: "p",
            },
          ],
          id: v4(),
          name: "Accordion Content",
          styles: { ...defaultStyles },
          type: "container",
          className:
            "hs-accordion-content w-full overflow-hidden transition-[height] duration-300",
        },
      ],
      id: v4(),
      name: "Accordion Item",
      styles: { ...defaultStyles },
      type: "container",
      className:
        "hs-accordion hs-accordion-active:border-gray-200 border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700",
    },
  ],
  id: v4(),
  name: "Accordion Wrapper",
  styles: { ...defaultStyles },
  type: "container",
  className: "hs-accordion-group",
}
