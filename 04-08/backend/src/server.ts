import express, { Application, Request, Response } from 'express';

// App representa o objeto express, ou seja, a instância do nosso servidor web. Depois de criado, podemos usar estes método
const app: Application = express();  // Tipando 'app' como 'Application'
const PORT: number = 3000;  //Define a porta 3000 para o servidor escutar, Tipagem da porta como número

// Middleware para permitir que o Express interprete JSON, 
// faz com que o Express consiga entender e converter o corpo das requisições em JSON
app.use(express.json());

// Rota GET para a raiz
//  define uma rota do tipo GET no caminho 
app.get('/', (req: Request, res: Response): void => {
  res.send('🚀 Servidor TypeScript rodando!');
});

app.get('/meunome', (req: Request, res: Response): void => {
    res.send('Ola, meu nome é nat');
})
// Iniciando o servidor
app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});

