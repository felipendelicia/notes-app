import {Request, Response} from 'express'
import jwt, { Secret } from 'jsonwebtoken'
import env from '../config/env_vars'
import conn from '../database'

function createNote(req:any, res:Response){
    jwt.verify(req.token, env.JWT_SECRET as Secret, (err:any, data:any)=>{
        if(err) res.sendStatus(403)
        else{
            console.log(data, req.body)
            res.send(data)
        }
    })
}
function modifyNote(req:Request, res:Response){
    res.send('modified note!')
}
function toggleNoteImportance(req:Request, res:Response){
    res.send('toggled note!')
}
function deleteNote(req:Request, res:Response){
    res.send('deleted note!')
}
function getNotes(req:Request, res:Response){
    res.send('gived note!')
}

const noteControllers = {
    createNote: createNote,
    modifyNote: modifyNote,
    toggleNoteImportance: toggleNoteImportance,
    deleteNote: deleteNote,
    getNotes: getNotes

}

export default noteControllers