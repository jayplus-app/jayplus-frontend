'use client'

import { FormEvent, useState } from 'react'
import { login } from 'lib/data/auth'
import Button from 'ui/button/button'

export default function LoginForm() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    login(email, password)
      .then(() => {
        setErrorMessage('')
        window.location.href = '/admin'
      })
      .catch(error => {
        setErrorMessage(error.message)
      })
      .finally(() => {
        setEmail('')
        setPassword('')
      })
  }

  const handleEmailChange = (event: FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const handlePasswordChange = (event: FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <form id='login-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>
          Username
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
      </div>
      <div className='form-group'>
        <label>
          Password
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
      </div>
      {errorMessage && (
        <div className='error-message'>
          <span>{errorMessage}</span>
        </div>
      )}
      <div className='form-button'>
        <Button type='submit'>Login</Button>
      </div>
    </form>
  )
}
