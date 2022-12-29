import { Response, NextFunction } from "express";
import { IRequestToken } from "../types";

export const ensureToken = (req:any, res:Response, next:NextFunction) => {
    const bearerHeader = req.headers['authorization']
    if (bearerHeader && typeof bearerHeader !== undefined){
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    } else {
        res.send('no token')
    }
}