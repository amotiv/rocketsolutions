'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Demo bypass injection
  if (email === 'admin@rocketsolutions.com' && password === 'password123') {
    const cookieStore = await cookies()
    cookieStore.set('demo_mode_login', 'true')
    revalidatePath('/', 'layout')
    redirect('/app/properties/1')
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/login?message=Invalid login credentials')
  }

  revalidatePath('/', 'layout')
  redirect('/app/properties/1')
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('demo_mode_login')

  const supabase = await createClient()
  await supabase.auth.signOut()
  
  revalidatePath('/', 'layout')
  redirect('/login')
}
