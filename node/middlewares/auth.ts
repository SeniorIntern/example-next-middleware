import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { serverConfig } from "../config";

export default function (req: Request, res: Response, next: NextFunction) {
  const { jwtSecret } = serverConfig;

  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    const decoded = jwt.verify(token, jwtSecret);
    // @ts-ignore
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}
