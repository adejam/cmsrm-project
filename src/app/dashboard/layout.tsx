import PrelineScript from "@/components/global/preline-script"
import { createAnonServerClient } from "@/lib/supabase/supabase-anon-server-client"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createAnonServerClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div>
      {children} <PrelineScript />
    </div>
  )
}
