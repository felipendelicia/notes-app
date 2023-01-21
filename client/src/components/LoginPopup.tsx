import '../styles/LoginPopup.css'
import { ILoginProps } from '../types/props'
import { createRef } from 'react'
import loginService from '../services/login'
import Button from './Button'
import Input from './Input'
import { IUser } from '../types'

export default function LoginPopup(props: ILoginProps) {

  const usernameRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const login = async () => {
    const credentials = { user: usernameRef.current!.value, password: passwordRef.current!.value }
    const rawUser: IUser = await loginService(credentials)
    props.setUser(rawUser)
    console.log('Logued in')
  }

  return (
    <div className="loginpopup-component">
      <div className="loginpopup">
        <h3>Login</h3>
        <div className='login-credentials'>
          <Input type='text' innerRef={usernameRef} placeholder='Enter your username' label='Username' />
          <Input type='password' innerRef={passwordRef} placeholder='Enter your password' label='Password' />
        </div>
        <Button handleClick={() => login()}>Login</Button>
      </div>
      <div className="login-image">
      </div>
    </div>
  )
}
