import express, { Application } from "express";
import userRoutes from "./routes";
import { AppDataSource } from "./data-source";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json()); // DEFINE QUE MINHA API TRABALHA COM JSON

app.use(userRoutes); //QUERO UTILIZAR MINHAS ROTAS

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco de dados conectado com sucesso!");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao banco de dados:", err);
  });