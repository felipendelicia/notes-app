import { IButtonProps } from "../types/props";
import '../styles/Button.css'

export default function Button(props:IButtonProps) {
  return (
    <button className="button-component" onClick={()=>props.handleClick()}>
        {props.children}
    </button>
  )
}
