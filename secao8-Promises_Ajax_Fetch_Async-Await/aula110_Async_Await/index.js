function aleatorio(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO!')
                return; 
            }

            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    }); 
}

// ASYNC - AWAIT

// async function executa() {
//     const fase1 = await esperaAi('Fase 1', aleatorio());
//     console.log(fase1);

//     const fase2 = await esperaAi('Fase 2', aleatorio());
//     console.log(fase2);

//     const fase3 = await esperaAi('Fase 3', aleatorio());
//     console.log(fase3);

//     console.log('Terminamos na fase:', fase3);
// }
// executa();

// Adicionando o TRY & CATCH -> para lidar com exceções ou erros
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);
    
        const fase2 = await esperaAi(222, aleatorio());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);
    
        console.log('Terminamos na fase:', fase3);
    }
    catch(e) {
        console.log(e);
    }
}
executa();



// THEN & CATCH

// esperaAi('Fase 1', aleatorio())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', aleatorio());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', aleatorio());
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase:', fase)
//     })
//     .catch(e => console.log(e));

