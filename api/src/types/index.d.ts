import { Request } from "express";

export interface IRequestToken extends Request {
    token: string;
}