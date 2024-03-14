import EditorProvider from '@/providers/editor/editor-provider'
import React from 'react'

const page = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-[20] bg-background overflow-hidden">
      <EditorProvider>
        page
      </EditorProvider>
    </div>
  )
}

export default page
