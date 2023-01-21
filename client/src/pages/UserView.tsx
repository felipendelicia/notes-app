import { IUserViewProps } from "../types/props";
import NeedLog from "./NeedLog";

export default function UserView(props:IUserViewProps) {
  if (props.user){
    return(
      <h1>Hola mundo</h1>
    )
  } else return <NeedLog/>
}
