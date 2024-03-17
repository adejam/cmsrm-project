import PrelineStatefulScript from "@/components/global/preline-stateful-script"

import EditorProvider from "@/providers/editor/editor-provider"

export const dynamic = "force-dynamic"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <EditorProvider>
        {children}
        <PrelineStatefulScript />
      </EditorProvider>
    </div>
  )
}
