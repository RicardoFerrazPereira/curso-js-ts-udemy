function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 
        if(typeof msg !== 'string') {
            reject('CAI NO ERRO!')
            return; 
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise');
        }, tempo);
    });
}

// Promise.all -> resolve todas as promises e retorna o valor

const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000),  // Gerar um erro
    'Outro valor'
];

Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro)
    });


// Promis.race -> a primeira promise que resolver, retorna o valor (tipo uma corrida)

