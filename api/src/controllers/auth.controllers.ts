import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import env from '../config/env_vars'
import jwt, { Secret } from 'jsonwebtoken'
import conn from "../database";

async function login(req: Request, res: Response) {
  const credentials = req.body;

  const raw_user = await conn.query<RowDataPacket[]>(
    `select * from users where user = ?`,
    [credentials.user]
  );

  const user = raw_user[0][0]

  if (user === undefined || user.password !== credentials.password) {
    res.json({ payload: "password or username incorrect", state: false })
  }
  else {
    const token = jwt.sign(user, env.JWT_SECRET as Secret, { expiresIn: '1h' })
    console.log(`${user.user} logged in!`)
    user.token = token
    res.json({
      payload:user, state:true
    })
  }

}

const authControllers = {
  login: login,
};

export default authControllers;
