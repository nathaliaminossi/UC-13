// src/app.ts
import express from 'express'
import { config } from 'dotenv'
import routes from './routes'
import cors from "cors"

config()
const app = express()
app.use(cors({ origin: "https://meusite.com" }));
app.use(express.json())
app.use(routes)

export default app