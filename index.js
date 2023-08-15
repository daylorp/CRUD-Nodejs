const express = require('express');

const server = express();

server.use(express.json());

//Gastos Básicos: 0 e assim por diante
const tipo = ['Gastos Básicos', 'Saúde', 'Alimentação'];

// Retorna um tipo de conta
server.get('/tipo/:index', (req, res) =>{
    const { index } = req.params;

    return res.json(tipo[index]);
});

// Retornar todos os tipos de conta
server.get('/tipo', (req, res) => {
    return res.json(tipo);
});

// Criar um novo tipo
server.post('/tipo', (req, res) => {
    const { name } = req.body;
    tipo.push(name);

    return res.json(tipo);
});

// Atualizar um tipo
server.put('/tipo/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    tipo[index] = name;

    return res.json(tipo);
});

// Deletar um tipo
server.delete('/tipo/:index', (req, res) => {
    const { index } = req.params;

    tipo.splice(index, 1);
    return res.json({ message: "O tipo de conta foi deletado"});
});


server.listen(3000);