
import "reflect-metadata"
import  express, { Application, Router } from "express";
import router from './routes';

import { AppDataSource } from "./config/data-source";

const app: Application = express();
const PORTA: number = 3000;

app.use(express.json());


AppDataSource.initialize()
.then(() => {
    console.log("Banco conectado com sucesso meu fi");
    app.use(Router);
    

    app.listen(PORTA, () => {
        console.log(`Servidor rodando meu fi, na porta ${PORTA}`);

    });
})
