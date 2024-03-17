// import PrelineScript from "@/components/global/preline-script"

export const dynamic = "force-dynamic"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
      {/* <PrelineScript /> */}
    </div>
  )
}
