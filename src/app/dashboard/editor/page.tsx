import EditorProvider from "@/providers/editor/editor-provider"
import React from "react"
import FunnelEditor from "./_components/funnel-editor"
import FunnelEditorNavigation from "./_components/funnel-editor-navigation"
import FunnelEditorSidebar from "./_components/funnel-editor-sidebar"

const Page = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <FunnelEditorNavigation />
      <div className="h-full flex justify-center">
        <FunnelEditor />
      </div>

      <FunnelEditorSidebar />
    </div>
  )
}

export default Page
