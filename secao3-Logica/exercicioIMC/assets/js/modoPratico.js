// Capturar evento de submit do formulário

const form = document.querySelector('#formulario'); /* Capturei o formulário */
// Função para capturar o evento de "submit"
form.addEventListener('submit', (e) => {  /* Aguarda a ocorrÊncia do evento (submit), quando ocorre esse evento, é chamado o segundo argumento (função) */
    e.preventDefault(); /* Impedir que o formulário seja enviado, possibilitando a captura dos dados do input */
    /* Informar qual elemento está recebendo o evento */
    const inputPeso = e.target.querySelector('#peso'); /* Pega o input inteiro */
    const inputAltura = e.target.querySelector('#altura'); /* Pega o input inteiro */

    const peso = Number(inputPeso.value); /* Pegar o valor do input, convertendo para 'Numbers" */
    const altura = Number(inputAltura.value); /* Pegar o valor do input, convertendo para 'Numbers" */

    //Checar o input tem valor verdadeiro (se o usuário digitou números)
    if (!peso) {    /* Se o peso for falso, ou seja, o usuário digitou algum valar inválido */
        setResultado('Peso Inválido', false); /* Retorna com a flag "falso", para conseguir colocar a classe  */
        return;
    }
    if (!altura) {   /* Se o peso for falso, ou seja, o usuário digitou algum valar inválido */
        setResultado('Altura Inválido', false); /* Retorna com a flag "falso", para criarmos a classe: "resultado-invalido"  */
        return;
    }

    // IMC
    const imc = getImc(peso,altura);
    // Faixa IMC
    const faixaImc = getFaixaImc(imc) 
    // Montar a mensagem
    const msg = `Seu IMC é ${imc} (${faixaImc}).`;

    setResultado(msg, true); /* Setamos o resultado com a flag true, para criarmos a classe: "paragrafo-resultado" */
    
    console.log(imc, faixaImc);

});

// Função para saber em qual faixa do imc  o usuário se encontra
const getFaixaImc = (imc) => {
    const faixa = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
    'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return faixa[5];
    if (imc >= 34.9) return faixa[4];
    if (imc >= 29.9) return faixa[3];
    if (imc >= 24.9) return faixa[2];
    if (imc >= 18.5) return faixa[1];
    if (imc < 18.5) return faixa[0];
}


// Função para calcular o IMC
const getImc = (peso, altura) => {
    const imc = peso / altura ** 2; 
    return imc.toFixed(2);  /* Retornar o IMC com duas casas decimais */
}

// Funçao para criar um elemento [ <p> ] e inserir dentro do "resultado"
const criaP = () => {
    const p = document.createElement('p'); /* Criar paragrafo <p> */
    return p;
}

// Função para colocar um HTML dentro da "div com id=resultado" que criamos no index.html
const setResultado = (msg, eValido) => { /* Função pra setar o resultado. Ela recebe uma mensagem (msg) e se o resultado é válido (eValido)   */
    const resultado = document.querySelector('#resultado'); /* Seleciona a "div" de resultado */
    //resultado.innerHTML = msg;
    //resultado.innerHTML = `<p>${msg}</p>`
    resultado.innerHTML = ''; /* Limpar o resultado */
    const p = criaP(); 

    // Checar se a flag foi enviada como verdadeiro ou falso
    if  (eValido) {   /* Se o valor do input for válido, adicione a classe 'paragrafo-resultado' no paragrafo <p> */
        p.classList.add('paragrafo-resultado');
    } else {    /* Senão, se o valor não for válido, adicione a classe 'resultado-invalido no paragrafo <p> */
        p.classList.add('resultado-invalido')
    }
    p.innerHTML = msg; /* Seta a mensagem que recebemos no parametro no html dentro do paragrafo <p> */
    resultado.appendChild(p); /* Adiciona um filho <p> na div resultado */   

   
}