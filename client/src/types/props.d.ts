import { MutableRefObject } from "react";
import { IUser } from "."

export interface IInputProps {
    type: string,
    placeholder: string | undefined,
    label: string | undefined,
    innerRef: any
}

export interface IButtonProps {
    children: string,
    handleClick: () => void
}

export interface IUserViewProps {
    user: IUser | undefined
}

export interface ILoginProps {
    setUser: (user: IUser) => void;
}