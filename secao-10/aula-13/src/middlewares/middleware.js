exports.middlewareGlobal = (req, res, next) => {
    // console.log('\nPassei no middleware global.\n');
    
    if(req.body.cliente) {   
        req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE MIRANDA');
        console.log(`\nVi que você postou ${req.body.cliente}\n`);
    }

    next();
};

exports.outroMiddleware = (req, res, next) => {
    console.log('\nSou seu outro middleware.\n');
    
    next();
};
