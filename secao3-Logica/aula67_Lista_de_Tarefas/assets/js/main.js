const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// FUNÇÃO PARA CRIAR O ELEMENTO "LI" NO HTML
const criaElementoLi = () => {
  const elementoli = document.createElement('li');
  return elementoli;
}

// FUNÇÃO PARA CRIAR UMA TAREFA
const criaTarefa = (textoInput) => {
  const li = criaElementoLi();
  li.innerText = textoInput;
  // adicionar a "li" dentro da "ul"
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

// PEGAR A TECLA ENTER SENDO PRESSIONADA DENTRO DO INPUT
inputTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {    // o keycode da tecla enter é 13
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    
  }
})

// CRIAR UMA FUNÇÃO PARA LIMPAR O INPUT
const limpaInput = () => {
  inputTarefa.value = '';
  inputTarefa.focus();  // função focus ->  coloca o cursor dentro do input e fica piscando esperando digitar
}

// CRIAR UM BOTÃO PARA APAGAR AS TAREFAS CRIADAS
const criaBotaoApagar = (li) => {  // recebe o li como paramentro para saber onde vai adicionar o botão de apagar
  li.innerText += ' ';  // Dar um espaço entre o texto e o botão, ou seja, o texto que ja está lá + o espaço
  const botaoApagar = document.createElement('button'); // Criar o elemento button
  botaoApagar.innerText = 'Apagar';  // O botão criado vai ter o texto "apagar"
  // botaoApagar.classList.add('apagar'); // cria uma classe no elemento button
  botaoApagar.setAttribute('class', 'apagar'); // cria uma classe no elemento button, com o nome "apagar"
  botaoApagar.setAttribute('title', 'Apagar essa tarefa')
  li.appendChild(botaoApagar); // adicionar o botão a "li"
}

// CAPTURAR O EVENTO DE CLIQUE NO BOTÃO
btnTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;

  criaTarefa(inputTarefa.value);
});

// Adicionar a funcionalidade de apagar no botão de apagar tarefa
document.addEventListener('click', (e) => {
  const elemento = e.target; // target -> indica onde no documento esta sendo clicado
  if (elemento.classList.contains('apagar')) { // Esse botão contém a classe apagar
  elemento.parentElement.remove(); // Remover o "pai" do elemento, pra quando clicar no botão de apagar tarefa, seja apagado tudo: o botão, o nome da tarefa e a "li"
  salvarTarefas(); // 1Pra poder apagar também do "localStorage" quando eu clicar em apagar tarefa
  }
})

// FUNÇÃO PARA SALVAR AS TAREFAS
const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll('li');  // Pegar todas as "li" dentro das tarefas
  // Obter os textos da "li" - pegar todos os textos
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Apagar o texto "apagar", pois como ele está puxando todos os textos da "li", o texto dos butões vêm junto. Estou substituindo (replace) o "Apagar" por nada (''). A função "trim()" remove os espaçõs sobrando nas pontas da string
    listaDeTarefas.push(tarefaTexto);  // Jogar os textos dentro do array (listaDeTarefas)
  }
  // Criar uma string do array convertido para JSON - converter o array em uma string
  // convertendo em string poderei salvar, e depois posso puxar do lugar onde eu salvar e manipular ele do jeito que eu quiser e depois converter de volta em um array
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  // Vou salvar no "LOCAL STORAGE", fica no navegador
  localStorage.setItem('tarefas', tarefasJSON);
  console.log(tarefasJSON);
}

// Criar uma função pra quando o site for carregado ele carregar as tarefas salvas no "localStorage"
// elea vai ler as tarefas e jogar de volta na "ul"
const adicionaTarefasSalvas = () => {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);  // converter as tarefas de volta para um array
  // Criar um for para guardar as tarefas na tela, quando recarregar o navegador, as tarefas continuam na tela
  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();
