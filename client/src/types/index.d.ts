export interface IUser {
    id: number,
    creation_date: Date,
    user: string,
    password: string
    token: string
}

export interface IAuth200 {
    state: boolean,
    user: IUser
}