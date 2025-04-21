exports.paginaInicial = (req, res) => {
    // req.session.usuario = { nome: 'Luiz', logado: true }
    // console.log(req.session.usuario);
    
    // req.flash('info', 'Olá mundo!');
    // req.flash('error', 'Algo errado');
    // req.flash('success', 'Sucesso!');
    // console.log(req.flash('info'), req.flash('error'), req.flash('success'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
