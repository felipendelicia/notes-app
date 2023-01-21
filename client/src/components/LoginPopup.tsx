import '../styles/LoginPopup.css'
import Button from './Button'
import Input from './Input'

export default function LoginPopup() {
  return (
    <div className="loginpopup-component">
      <div className="loginpopup">
        <h3>Login</h3>
        <div className='login-credentials'>
          <Input type='text' placeholder='Enter your username' label='Username' />
          <Input type='password' placeholder='Enter your password' label='Password' />
        </div>
        <Button handleClick={() => null}>Login</Button>
      </div>
      <div className="login-image">
      </div>
    </div>
  )
}
