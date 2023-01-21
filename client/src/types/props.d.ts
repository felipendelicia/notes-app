import { IUser } from "."

export interface IInputProps {
    type: string,
    placeholder: string | undefined,
    label: string | undefined
}

export interface IButtonProps {
    children:string,
    handleClick: () => void
}

export interface IUserViewProps {
    user: IUser | undefined
}