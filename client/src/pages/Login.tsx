import LoginPopup from "../components/LoginPopup"
import { ILoginProps } from "../types/props"

export default function Login(props:ILoginProps) {
  return (
    <LoginPopup {...props}/>
  )
}
