
// É um framework do Node.js para criar servidores com rotas e controle de requisições.
const express = require('express');

// biblioteca que permite interaçoes com o banco
const mysql = require('mysql2');

//Permite que o servidor entenda os dados enviados em formato JSON no corpo da requisição.
const bodyParser = require('body-parser');
const { error } = require('console');

// crio o objeto express , que permite acessar metodos para configurar meu servidor 
const app = express();
// configura o servidor para aceitar dados no formato json
app.use(bodyParser.json());

// configura a conexao, passando todas as informaçoes necessarias paea se conectar com o servidor do banco de dados 
const connection = mysql.createConnection({
    host: 'localhost', // enredereço do servidor do banco de dados  
    port: 3306, // porta que ele usa
    user: 'root', // usuario
    password: 'root', // senha 
    database: 'meu_backend' // nome do meu banco
});


//connect tenta se conectar ao banco, error: se existir, algo deu errado, connection.threadId: ID da conexão ativa
// recebe como argumento uma funçao de callback - ou seja,  uma funçao que sera executada depois que o banco de dados responder.
connection.connect(error => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados: ' + error.stack);
        return;
    }
    console.log('Conectado ao banco de dados com ID ' + connection.threadId);
});

// Rotas 
// cria uma rota HTTP POST para cadastrar um novo usuário no banco de dados 
//POST: envia dados
//req.body: corpo da requisição (JSON com nome, email e senha)
//?: evita SQL Injection (substituído pelos valores no array [nome, email, senha])
//res.status(201): código HTTP para "criado com sucesso!"

app.post('/usuarios', (req, res) => {
    const { nome, email, senha } = req.body;
    const sql = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    connection.query(sql, [nome, email, senha], (error) => {
        if (error) return res.status(500).send('Erro ao adicionar usuário.' + error.message);
        res.status(201).send('Usuário adicionado com sucesso.');
    });
});

// rota para obter informaçoes de todos usuarios
app.get('/usuarios', (req, res) => {
    connection.query('SELECT * FROM usuarios', (error, results) => {
      if (error) return res.status(500).send('Erro ao obter usuários.');
      res.json(results);
    });
  });

  app.get('/usuarios:id', (req, res) => {
    const {id} = req.params;
    connection.query('SELECT FROM usuarios WHERE id = ?', [id], (error, results) => {
        if (error) return res.status(500).send('Erro ao obter o usuário:' + error.message);
        res.json(results);
    });
  })

  app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
    connection.query(sql, [nome, email, senha, id], (error) => {
      if (error) return res.status(500).send('Erro ao atualizar usuário.');
      res.send('Usuário atualizado com sucesso.');
    });
  });

  app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM usuarios WHERE id = ?', [id], (error) => {
      if (error) return res.status(500).send('Erro ao deletar usuário.');
      res.send('Usuário deletado com sucesso.');
    });
  });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});