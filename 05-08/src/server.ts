import express, { Application, Request, Response, NextFunction} from 'express';

// App representa o objeto express, ou seja, a instância do nosso servidor web. Depois de criado, podemos usar estes método
const app: Application = express();  // Tipando 'app' como 'Application'
const PORT: number = 3000;  //Define a porta 3000 para o servidor escutar, Tipagem da porta como número

// Middleware para permitir que o Express interprete JSON, 
// faz com que o Express consiga entender e converter o corpo das requisições em JSON
app.use(express.json());

// Rota GET para a raiz
//  define uma rota do tipo GET no caminho 
app.get('/', (req: Request, res: Response): void=> {
  res.send('🚀 Servidor TypeScript rodando!');
});

app.get('/saudacao', (req: Request, res: Response): Response => {
    return res.send('Olá, jovem programador!');
  });

// Iniciando o servidor
app.listen(PORT, (): void => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});

// Define um middleware chamado "porteiroMiddleware"
// Middleware é uma função que intercepta a requisição antes de ela chegar à rota final
// NextFunction é o tipo da função next(). Se você não chamar next(), a requisição fica presa no middleware e não chega na rota final
const porteiroMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
    // Exibe no console o caminho da URL acessada na requisição
    console.log(`📢 Requisição recebida em: ${req.url}`);
  
    // Chama a função "next" para permitir que a requisição continue para o próximo middleware ou rota
    next();
  };
  
  // Aplica o middleware "porteiroMiddleware" de forma global
  // Isso significa que ele será executado em **todas as requisições**, independentemente da rota
  app.use(porteiroMiddleware);
