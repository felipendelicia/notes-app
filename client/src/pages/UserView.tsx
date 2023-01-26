import { IUserViewProps } from "../types/props";
import NeedLog from "./NeedLog";

export default function UserView(props:IUserViewProps) {
  if (props.user){
    return(
      <div className="userview-page">
        
      </div>
    )
  } else return <NeedLog/>
}
