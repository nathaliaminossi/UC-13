// Importa os tipos e funções principais do Express
import express, { Application, Request, NextFunction, Response, requestTime } from 'express';


// Cria uma instância da aplicação Express
const app: Application = express();

// Define a porta onde o servidor irá escutar (3000)
const PORT: number = 3000;

// Middleware que diz para o Express entender requisições com JSON no corpo (body)
app.use(express.json());

// Define uma rota GET para o caminho "/sobre"
app.get('/sobre', (req: Request, res: Response) => {
  // Quando o usuário acessar "/sobre", retorna um JSON com essas informações
  res.json({ 
    nome: 'Nathyzinha',
    idade: 17,
    descricao: "nathy linda perfeita"
  });
});

// Faz o servidor começar a escutar na porta 3000
app.listen(PORT, () => {
  console.log('servidor rodando');
});


// Define uma rota DELETE no caminho "/comentarios/:id"
// Isso significa que a URL deve ter um parâmetro chamado "id" (ex: /comentarios/123)
app.delete('/comentarios/:id', (req: Request, res: Response): Response => {

    // Extrai o valor do parâmetro "id" da URL
    const { id } = req.params;
  
    // Verifica se o ID foi enviado. Se não foi, retorna erro 400 (requisição ruim) com uma mensagem
    if (!id) return res.status(400).json({ mensagem: 'ID não enviado' });
  
    // Aqui poderia ter lógica para deletar o comentário do banco de dados ou lista, mas não tem ainda
  
    // Retorna o status 204, que significa "No Content" (sem conteúdo)
    // Esse status indica que a operação foi bem-sucedida, mas não tem resposta para enviar
    return res.status(204).send();
  });



  const requestTime = (req: Request, res: Response, next: NextFunction) => {
      req.requestTime = new Date();
      next();
  }
  
  app.use(requestTime);
  
  app.get('/', (req: Request, res: Response) => {
      const responseText = `Requisição recebida em: ${req.requestTime}`;
      res.send(responseText);
    });
    
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    });
  