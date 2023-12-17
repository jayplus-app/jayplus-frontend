'use server'
import { login } from 'lib/data/auth'
import Button from 'ui/button/button'

const initialState = {
  message: null,
}

export default async function LoginPage() {
  const handleLogin = login.bind(null, '/admin')
  return (
    <div id='admin-login-page'>
      <form id='login-form' action={handleLogin}>
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
