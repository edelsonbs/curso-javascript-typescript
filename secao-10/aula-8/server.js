const express = require('express');
const app = express();

// https://facebook.com/profiles/12345/campanha=googleads&nome_campanha=seila

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {    
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            Outro valor: <input type="text" name="outrovalor">
            <button>Enviar formulário</button>
        </form>
    `)
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query)
    // res.send(req.params);
    res.send(req.query.nome);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que foi enviado ${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000...');
});
