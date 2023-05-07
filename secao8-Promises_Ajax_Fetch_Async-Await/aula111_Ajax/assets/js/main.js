// // AJAX (Asynchronous JavaScript e XML) 

// obs. Axios é melhor que o ajax



// Como era feito antes - callback

// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     //xhr.open('GET', 'URL', true); // true -> assíncrona
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//     xhr.addEventListener('Load', () => {
//         if(xhr.status >= 200 && xhr.status < 300) {  // Se o código Http for entre 200 e 300
//             obj.success(xhr.responseText); // Vamos aceitar como um requisição de sucesso o que o for buscado (html, json...) [responseText]
//         }
//         else {
//             obj.error(xhr.statusText); // Retornar o erro
//         }
//     });
// }

// // Pegar os cliques nos links
// document.addEventListener('click', e => {  // adicionando um evento no documento todo
//     const elemento = e.target; // Onde ocorreu o evento e jogar no elemento
//     // Qual a tag está sendo clicada, se é um link ou qualquer outra tag
//     const tag = elemento.tagName.toLowerCase(); // pegando o nome da tag e convertendo para fonte minuscula

//     if(tag === 'a') {  // checar se é uma tag <a>
//         e.preventDefault();
//         carregaPagina(elemento);
//     }
// }) 

// function carregaPagina(elemento) {
//     const href = elemento.getAttribute('href'); // pegar o link que está sendo clicado
//     //console.log(href)

//     request({
//         method: 'GET',
//         url: href,
//         success(response) {
//             carregaResultado(response);
//         },
//         error(errorText) {
//             console.log(errorText)
//         }
//     })
// }

// function carregaResultado(response) {
//     // Pegar o que veio do response e jogar para dentro do resultado
//     const resultado = document.querySelector('.resultado'); // Selecionei a <div> resultado 
//     resultado.innerHTML = response; // Joguei o response dentro do da <div> resultado
// }


// PROMISES - ASYNC - AWAIT - TRY - CATCH

const request = obj => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.url, true);
      xhr.send();
  
      xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
  };
  
  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  });
  
  async function carregaPagina(el) {
    const href = el.getAttribute('href');
  
    const objConfig = {
      method: 'GET',
      url: href
    };
  
    try {
      const response = await request(objConfig);
      carregaResultado(response);
    } catch(e) {
      console.log(e);
    }
  }
  
  function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }
  