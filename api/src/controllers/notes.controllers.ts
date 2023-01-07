import { Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { RowDataPacket } from "mysql2";
import env from "../config/env_vars";
import conn from "../database";

function createNote(req: any, res: Response) {
  jwt.verify(
    req.token,
    env.JWT_SECRET as Secret,
    async (err: any, data: any) => {
      if (err) res.sendStatus(403);
      else {
        const letter = req.body;

        await conn.query(
          "insert into notes (title, user_id, description, important) values (?, ?, ?, ?)",
          [letter.title, data.id, letter.description, letter.important]
        );

        res.sendStatus(200);
      }
    }
  );
}

function modifyNote(req: any, res: Response) {
  jwt.verify(
    req.token,
    env.JWT_SECRET as Secret,
    async (err: any, data: any) => {
      if (err) res.sendStatus(403);
      else {
        await conn.query(
          "update notes set title = ?, description = ? where id = ?",
          [req.body.title, req.body.description, req.body.id]
        );

        res.sendStatus(200);
      }
    }
  );
}

function toggleNoteImportance(req: any, res: Response) {
  jwt.verify(
    req.token,
    env.JWT_SECRET as Secret,
    async (err: any, data: any) => {
      if (err) res.sendStatus(403);
      else {
        await conn.query(
          "update notes set important = not important where id=?",
          [req.body.id]
        );

        res.sendStatus(200);
      }
    }
  );
}

function deleteNote(req: any, res: Response) {
  jwt.verify(
    req.token,
    env.JWT_SECRET as Secret,
    async (err: any, data: any) => {
      if (err) res.sendStatus(403);
      else {
        await conn.query("delete from notes where id=?", [req.body.id]);

        res.sendStatus(200);
      }
    }
  );
}

function getNotes(req: any, res: Response) {
  jwt.verify(
    req.token,
    env.JWT_SECRET as Secret,
    async (err: any, data: any) => {
      if (err) res.sendStatus(403);
      else {
        console.log(data)
        const notes = await conn.query<RowDataPacket[]>(
          "select * from notes where user_id=?",
          [data.id]
        );

        res.send(notes[0]);
      }
    }
  );
}

const noteControllers = {
  createNote: createNote,
  modifyNote: modifyNote,
  toggleNoteImportance: toggleNoteImportance,
  deleteNote: deleteNote,
  getNotes: getNotes,
};

export default noteControllers;
