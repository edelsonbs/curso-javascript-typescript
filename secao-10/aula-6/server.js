const express = require('express');
const app = express();

//         Criar   Ler   Atualizar Apagar  
// CRUD -> CREATE, READ, UPDATE,   DELETE
//         POST    GET   PUT       DELETE

// http://meusite.com/ <- GET -> Entergua a página /
// http://meusite.com/sobre <- GET -> Entergua a página /sobre
// http://meusite.com/contato <- GET -> Entergua a página /contato

app.get('/', (req, res) => {
    // res.send('<b>Hello world!</b>');
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome">
            <button>Enviar</button>
        </form>
    `)
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.')
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000...');
});
