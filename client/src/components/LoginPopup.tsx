import '../styles/LoginPopup.css'
import { ILoginProps } from '../types/props'
import { createRef, useState } from 'react'
import loginService from '../services/login'
import Button from './Button'
import Input from './Input'

export default function LoginPopup(props: ILoginProps) {

  const usernameRef = createRef<HTMLInputElement>()
  const passwordRef = createRef<HTMLInputElement>()

  const [message, setMessage] = useState('')

  const login = async () => {
    const credentials = { user: usernameRef.current!.value, password: passwordRef.current!.value }
    const rawUser: { payload: any, state: boolean } = await loginService(credentials)
    console.log(rawUser)
    rawUser.state ? props.setUser(rawUser.payload) : setMessage(rawUser.payload)
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

        <p className='message-paragraph'>{message}</p>

      </div>
      <div className="login-image">
      </div>
    </div>
  )
}
