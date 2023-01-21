import { IInputProps } from "../types/props";
import '../styles/Input.css'

export default function Input(props: IInputProps) {
  return (
    <div className="input-component">
      <p>{props.label}</p>
      <input className='input-component' type={props.type} placeholder={props.placeholder} />
    </div>
  )
}
