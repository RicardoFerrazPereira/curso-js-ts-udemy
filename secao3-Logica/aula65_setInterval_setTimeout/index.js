const mostraHora = () => {
    let data = new Date();

    return data.toLocaleTimeString('en', {
        hour12: false
    });
}

// const funcaoDoInterval = () => {
//     console.log(mostraHora());
// }

//setInterval(funcaoDoInterval, 1000); // Ao invés de executar a função "funcaoDoInterval" aqui, eu vou só passar a
                               //  referência. Passar a referência, quer dizer que estou chamando a função sem
                               // executar ela. Para executar uma função precisamos colocar os parenteses.
                               // exemplo: funcaoDoInterval();
                               // O segundo parâmetro quer dizer de quanto em quanto tempo quero que isso seja executado.
                               // Vou querer de 1 em 1 segundo =>  milésimo de segundo => 1000 milesegundos = 1 segundo

// Quando trabalhamos com intervalos de tempo, usamos a função "setInterval"
// setInterval -> vai configurar o intervalo de tempo para que alguma função seja executada em determinado momento.

// Podemos melhor usando uma função anônima, ao invés de criar uma função ("funcaoDoInterval") pra poder mostrar a hora

// setInterval(function () {  // função anônima
//     console.log(mostraHora());
// }, 1000);

const timer = setInterval(function () {  // função anônima
    console.log(mostraHora());
}, 1000);

setTimeout(function() {  // usei essa função para parar a função acima, utilizando a variável "timer"
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('Olá mundo!');
}, 5000)