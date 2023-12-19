'use server'

import { cookies } from 'next/headers'
import { apiUrl } from 'lib/utils/env'
import { redirect } from 'next/navigation'
import { getSubdomain } from 'lib/utils/url'

export async function login(redirectPath: string, formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const subdomain = await getSubdomain()
    const res = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Business-Name': subdomain,
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include',
    })

    if (!res.ok) {
      throw new Error('Login failed')
    }

    const data = await res.json()

    cookies().set('access_token', data.access_token.token, {
      maxAge: data.access_token.expiry_seconds,
    })

    cookies().set('refresh_token', data.refresh_token.token, {
      maxAge: data.refresh_token.expiry_seconds,
    })

    redirect(redirectPath)
  } catch (error) {
    throw error
  }
}

export async function logout(redirectPath: string) {
  try {
    cookies().delete('access_token')
    cookies().delete('refresh_token')

    redirect(redirectPath)
  } catch (error) {
    throw error
  }
}
