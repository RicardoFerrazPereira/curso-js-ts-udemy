const elementos = [
    {tag: 'p', texto: 'Gigante da Colina'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'footer', texto: 'Frase 3'},
];

const container = document.querySelector('.container'); // Selecionar o elementos
const div = document.createElement('div');  // Criar um elemento ('div'), que vai receber as tags

// 'For' para criar as tags
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; // Selecionar
    let tagCriada = document.createElement(tag); // Criar as tags
    // tagCriada.innerHTML = texto; // Adicionar o texto na tag
    let textoCriado = document.createTextNode(texto); // Criar o texto
    
    tagCriada.innerText = texto; // Adicionar o texto na tag
    div.appendChild(tagCriada); // Adiciona as "tags" dentro da "div"
}

container.appendChild(div); // Adiciona a "div" dentro da "container"