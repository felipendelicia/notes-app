import {Request, Response} from 'express'

function createNote(req:Request, res:Response){
    res.send('created note!')
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