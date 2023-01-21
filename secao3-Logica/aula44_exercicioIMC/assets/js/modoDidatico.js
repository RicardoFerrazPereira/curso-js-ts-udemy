// Capturar evento de submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Evento prevenido');
    setResultado('Vasco');
});

// Função para colocar um HTML dentro da "div com id=resultado" que criamos no index.html
const setResultado = (msg) => {
    const resultado = document.querySelector('#resultado');
    //resultado.innerHTML = msg;
    //resultado.innerHTML = `<p>${msg}</p>`

    resultado.innerHTML = ''; /* Limpar o resultado */

    // Criar um elemento [ <p> ] e inserir dentro do "resultado"
    const p = document.createElement('p'); /* Crie um paragrafo <p> */
    p.classList.add('paragrafo-resultado'); /* Adicionar uma "class" no paragrafo <p> */
    p.innerHTML = 'Qualquer coisa'; /* Coloquei o html dentro do paragrafo <p> */
    resultado.appendChild(p); /* Inserir um filho <p> na div resultado */
}