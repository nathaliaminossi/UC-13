import express, { Application } from "express";
import router from "./routes/UserRoutes";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
    console.log(` servidor rodando na porta ${PORT}` )
})



