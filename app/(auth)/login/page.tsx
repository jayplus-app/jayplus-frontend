import Button from 'ui/button/button'

export default function AdminLoginPage() {
  return (
    <div id='admin-login-page'>
      <form id='login-form'>
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
