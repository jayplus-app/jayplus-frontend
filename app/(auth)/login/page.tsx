'use client'

import { login } from 'lib/data/auth'
import { useFormState } from 'react-dom'
import Button from 'ui/button/button'

export default function LoginPage() {
  const [formState, dispatch] = useFormState(login, {
    errorMessage: '',
    success: false,
  })

  if (formState.success) {
    window.location.href = '/admin'
  }

  return (
    <div id='admin-login-page'>
      <form id='login-form' action={dispatch}>
        {!formState.success && formState?.errorMessage && (
          <div className='error-message'>{formState.errorMessage}</div>
        )}
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input type='email' id='email' name='email' />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' />
        </div>
        <div className='form-button'>
          <Button type='submit'>Login</Button>
        </div>
      </form>
    </div>
  )
}
