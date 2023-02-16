const cronometro = () => {
    
    // SELECIONAR RELÓGIO
    const relogio = document.querySelector('.relogio');
    // VARIÁVEL PARA MANTER OS SEGUNDOS
    let segundos = 0;
    // VARIÁVEL PARA PODER USAR NOS OUTROS EVENTOS
    let timer;
    // FUNÇÃO PARA INICIAR O RELÓGIO
    const iniciaRelogio = () => {     // Essa função vai atualizar a variável "timer"
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    // CAPTURAR O EVENTO DE CLIQUE NOS BOTÕES

    document.addEventListener('click', function (event) {
        const elemento = event.target; // target -> é exatamente o local onde estou clicando na tela


        if (elemento.classList.contains('iniciar')) { // Se existe a classe "iniciar" no elemento que estou clicando, execute o codigo abaixo 
            relogio.classList.remove('pausado')  // Quando iniciar o relógio a classe que deixa a fonte em vermelho some
            clearInterval(timer); // parar o timer
            iniciaRelogio();
        }

        if (elemento.classList.contains('parar')) { // Se existe a classe "parar" no elemento que estou clicando, execute o codigo abaixo 
            relogio.classList.add('pausado') // Quando pausar o relogio as fontes ficam vermelhas, pois vai adicionar a classe "pausado"
            clearInterval(timer); // parar o timer
        }

        if (elemento.classList.contains('zerar')) { // Se existe a classe "zerar" no elemento que estou clicando, execute o codigo abaixo 
            clearInterval(timer); // parar o timer
            relogio.innerHTML = '00:00:00';  // Zera o relógio
            relogio.classList.remove('pausado')  // Quando iniciar o relógio a classe que deixa a fonte em vermelho some
            segundos = 0;  // voltar a variável "segundos" para 0, para quando iniciar o timer, ele iniciar do 0
        }
    });
    // CRIAR UMA FUNÇÃO PARA PEGAR A HORA À PARTIR DOS SEGUNDOS
    // Essa função vai receber os segundos, criar a data e retornar essa data
    const criaHoraDosSegundos = (segundos) => {
        const data = new Date(segundos * 1000);  // o javascript recebe em milésimos de segundo, então temos que multiplicar por 1000
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }
}
cronometro();


