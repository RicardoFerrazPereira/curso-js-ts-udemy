// Usar o FETCH API para buscar os dados do arquivo: pessoas.json

// fetch('pessoas.json')
//     .then(resposta => resposta.json()) // Pegou a resposta que veio do then e converteu e json
//     //.then(json => console.log(json));
//     .then(json => carregaElementosNaPagina(json)); // Pegou a promise com valor json e mandou para a função

// Usar o AXIOS para buscar os dados do arquivo: pessoas.json
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data)); // Recebe a "resposta" e retorna o "data"

function carregaElementosNaPagina(json) {
// Jogar os elementos numa tabela
    const table = document.createElement('table');
    for(let pessoa of json) {
        //console.log(pessoa.nome);
        const tr = document.createElement('tr'); // Criar uma linha na tabela

        let td1 = document.createElement('td'); // Criar uma coluna para nome
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);
        
        let td2 = document.createElement('td'); // Criar uma coluna para idade
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td'); // Criar uma coluna para salario
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        // Inserir a linha 'tr' na tabela
        table.appendChild(tr);

    }
// Inserir a tabela no documento html
const resultado = document.querySelector('.resultado');
resultado.appendChild(table);
}