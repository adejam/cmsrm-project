"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { IStaticMethods } from "preline/preline"
import { useEditor } from "@/providers/editor/editor-provider"
import useRerenderPreline from "@/hooks/use-rerender-preline"

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

export default function PrelineStatefulScript() {
  const path = usePathname()
  const { state } = useEditor()
  const { rerenderPreline } = useRerenderPreline()

  useEffect(() => {
    import("preline/preline")
  }, [])

  useEffect(() => {
    setTimeout(() => {
      window.HSStaticMethods.autoInit()
    }, 100)
  }, [path, state, rerenderPreline])

  return null
}
