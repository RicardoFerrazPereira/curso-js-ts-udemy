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

// Promise.all(promises)
//     .then((valor) => {
//         console.log(valor);
//     })
//     .catch((erro) => {
//         console.log(erro)
//     });


// Promise.race -> a primeira promise que resolver, retorna o valor (tipo uma corrida)

const promises2 = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500), // Vai retornar esse, pois é o que vai terminar mais rápido
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000),  // Gerar um erro   
];


Promise.race(promises2)
    .then((valor) => {
        console.log(valor);
    })
    .catch((erro) => {
        console.log(erro)
    });


// Promise.resolve

function baixaPagina() {   // Essa função espera uma promise com retorno
    const emCache = false; // true

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));


// Promise.reject

function baixaPagina1() {  
    const emCache = true; 

    if(emCache) {
        return Promise.reject('Usando o reject');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina1()
    .then(dadosPagina1 => {
        console.log(dadosPagina1);
    })
    .catch(e => console.log('ERRO', e));



