"use client"

import { FlagIcon } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormState } from "react-dom"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"

import { signupSchema } from "@/validation-schemas/auth.schema"
import { signupAction } from "@/app/(auth)/actions"
import SubmitButton from "@/components/ui/submit-button"
import { useSearchParams } from "next/navigation"

type FormValues = z.output<typeof signupSchema>

const SignUpForm = () => {
  const [state, formAction] = useFormState(signupAction, {
    message: "",
  })

  const searchParams = useSearchParams()
  const redirectFrom = searchParams?.get("redirectFrom")! ?? ""

  const form = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      password: "",
      email: "",
      password_confirmation: "",
      redirectFrom: redirectFrom.replaceAll("//", "/") ?? "/dashboard",
      ...(state?.fields ?? {}),
    },
  })

  const formRef = useRef<HTMLFormElement>(null)

  return (
    <Form {...form}>
      <div className="items-center justify-center p-6 lg:flex lg:p-10">
        <form
          ref={formRef}
          className="mx-auto space-y-6 max-w-sm lg:max-w-none lg:w-[400px]"
          action={formAction}
          onSubmit={async (evt) => {
            evt.preventDefault()
            await form.handleSubmit(() => {
              formAction(new FormData(formRef.current!))
            })(evt)
          }}
        >
          <div className="space-y-2 text-center">
            <Link className="inline-block" href="#">
              <FlagIcon className="w-10 h-10 mx-auto" />
              <span className="sr-only">Home</span>
            </Link>
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your email below to create an account
            </p>
          </div>

          {typeof state.success !== "undefined" && state.success === false && (
            <div className="text-red-500 text-center">{state.message}</div>
          )}
          {state.success && (
            <div className="text-green-500 text-center">{state.message}</div>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="m@example.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="redirectFrom"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input id="redirectFrom" type="hidden" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password Confirmation</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      placeholder="m@example.com"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubmitButton className="w-full">Create account</SubmitButton>
            <p className="text-sm text-center space-x-1">
              <span>Already have an account?</span>
              <Link className="underline text-primary" href="/login">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Form>
  )
}

export default SignUpForm
