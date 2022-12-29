import {Request, Response} from 'express'

function login(req:Request, res:Response){
    res.send('loggin in!')
}

const authControllers = {
    login: login
}

export default authControllers