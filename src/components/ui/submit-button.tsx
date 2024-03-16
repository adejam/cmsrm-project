"use client"

import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"
import { Button } from "./button"

export interface Props extends React.ComponentPropsWithoutRef<"button"> {}

const SubmitButton: React.FC<Props> = ({ children, disabled, ...props }) => {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending || disabled} type="submit" {...props}>
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}

export default SubmitButton
