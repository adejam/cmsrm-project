'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createAnonServerClient } from '@/lib/supabase/supabase-anon-server-client';
import { loginSchema, signupSchema } from '@/validation-schemas/auth.schema';

type FormState = {
  message: string
  fields?: Record<string, string>
  success?: boolean
}

export async function loginAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const supabase = createAnonServerClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = Object.fromEntries(formData)

  const validatedData = loginSchema.safeParse(data)

  if (!validatedData.success) {
    const parsedData = loginSchema.parse(data)
    return {success: false, fields: parsedData, message: 'Invalid form data'}
  }

  const fields = validatedData.data
  
  const {redirectFrom, ...payload} = validatedData.data
  const { error } = await supabase.auth.signInWithPassword(validatedData.data)

  if (error) {
    return {success: false, fields, message: error.message}
  }

  revalidatePath('/dashboard', 'layout')
  redirect(redirectFrom || '/dashboard')
}

export async function signupAction(prevState: FormState, formData: FormData): Promise<FormState> {
  const supabase = createAnonServerClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = Object.fromEntries(formData)

  const validatedData = signupSchema.safeParse(data)

  if (!validatedData.success) {
    const parsedData = signupSchema.parse(data)
    return {success: false, fields: parsedData, message: 'Invalid form data'}
  }

  const fields = validatedData.data

  const {redirectFrom, password_confirmation,  ...payload} = validatedData.data

  const { error, data: signInData } = await supabase.auth.signUp({
    ...payload,
    options: {
      emailRedirectTo: `${process.env.ROOT_DOMAIN}/api/v1/auth/callback?next=${redirectFrom || '/dashboard'}`,
    },
  })

  if (error) {
    return {success: false, fields, message: error.message}
  }

  console.log(signInData)

  // if (!error) {
  //   setErrorMessage('')
  //   if (data?.user?.identities?.length === 0) {
  //     const { error: magicLinkError } = await supabase.auth.signInWithOtp({
  //       email: values.email,
  //       options: {
  //         emailRedirectTo: `${origin}/api/v1/auth/callback?next=${redirectFrom}`,
  //       },
  //     })
  //     if (magicLinkError) {
  //       setErrorMessage(magicLinkError.message)
  //       setSuccessMessage('')
  //     } else {
  //       setSuccessMessage('Check your email for confirmation link')
  //     }
  //   } else {
  //     setSuccessMessage('Check your email for confirmation link')
  //   }
  // }

  revalidatePath('/dashboard', 'layout')
  return {success: true, fields, message: "Check your email for confirmation"}
  // redirect('/dashboard')
}
