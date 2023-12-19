'use server'

import { cookies } from 'next/headers'
import { apiUrl } from 'lib/utils/env'
import { getSubdomain } from 'lib/utils/url'

export async function login(prevState: any, formData: FormData) {
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

    const data = await res.json()

    if (!res.ok) {
      return data.message
        ? { errorMessage: data.message }
        : { errorMessage: 'An error happened' }
    }

    cookies().set('access_token', data.access_token.token, {
      maxAge: data.access_token.expiry_seconds,
    })

    cookies().set('refresh_token', data.refresh_token.token, {
      maxAge: data.refresh_token.expiry_seconds,
    })

    return {
      success: true,
    }
  } catch (error) {
    return {
      errorMessage: 'Some Error Happened',
    }
  }
}

export async function logout() {
  try {
    cookies().delete('access_token')
    cookies().delete('refresh_token')

    return Promise.resolve()
  } catch (error) {
    throw error
  }
}
