import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const uri = process.env.URI!;
const jwtSecret = process.env.JWT_SECRET!;

export = { port, uri, jwtSecret };
