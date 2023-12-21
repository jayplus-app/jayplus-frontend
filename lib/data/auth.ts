'use server'

import { cookies } from 'next/headers'
import { apiUrl } from 'lib/utils/env'
import { getSubdomain } from 'lib/utils/url'

export async function login(email: string, password: string) {
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
      console.log('this bitch is not ok')
      return { success: false, message: data.message || 'Something went wrong' }
    }

    cookies().set('access_token', data.access_token.token, {
      maxAge: data.access_token.expiry_seconds,
    })

    cookies().set('refresh_token', data.refresh_token.token, {
      maxAge: data.refresh_token.expiry_seconds,
    })

    return Promise.resolve()
  } catch (error) {
    throw error
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
