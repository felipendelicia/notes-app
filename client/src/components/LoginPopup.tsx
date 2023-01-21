import '../styles/LoginPopup.css'
import Input from './Input'

export default function LoginPopup() {
  return (
    <div className="loginpopup-component">
      <div className='login-popup'>
        <h3>Login</h3>
        <Input type='text' placeholder='enter your user' label='username'/>
        <Input type='password' placeholder='enter your password' label='password'/>
      </div>
    </div>
  )
}
