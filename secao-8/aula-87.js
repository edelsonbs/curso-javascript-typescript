function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('PROMISE REJEITADA')
                return;
            };

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // esperaAi(100, rand(1, 5)),
    // 'Outro valor'
];

// Espera resolver todas as promessas
// Promise.all(promises)
//   .then(function(valor) {
//     console.log(valor);
//   })
//   .catch(function(erro) {
//     console.log(erro)
//   })

// Retorna a primeira promessa resolvida
// Promise.race(promises)
//   .then(function(valor) {
//     console.log(valor);
//   })
//   .catch(function(erro) {
//     console.log(erro)
//   })

// Promise.resolve
// function baixaPagina() {
//   const emCache = false;

//   if(emCache) {
//     return Promise.resolve('Página em cache');
//   } else {
//     return esperaAi('Baixei a página', 3000);
//   }
// }

// Promise.reject
function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:', e));
