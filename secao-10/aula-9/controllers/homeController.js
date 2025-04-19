exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do cliente: <input type="text" name="nome">
            Outro valor: <input type="text" name="outrovalor">
            <button>Enviar formulário</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
 };
