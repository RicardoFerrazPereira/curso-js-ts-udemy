try {
    // É executada quando não há erros
} catch (error) {
    // É executada quando há erros
} finally {
    // o finally é sempre executado, mas pode ser omitido se vc não precisar que um código seja executado sempre
    // em alguns momentos vamos precisar do bloco "finally"
}

// SEM ERRO
try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
}catch (e) {
    console.log('Tratando o erro');
}finally {
    console.log('Finally: Eu sempre sou executado');
}

console.log('########################');

// COM ERRO
try {
    console.log(a)
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
}catch (e) {
    console.log('Tratando o erro');
}finally {
    console.log('Finally: Eu sempre sou executado');
}

console.log('########################');

// Cria uma função para retornar a hora

const retornaHora = (data) => {
  if(!(data instanceof Date)) { // se essa "data" não for uma instâcia de "Date", vai dar "false" , erro
   //console.log('Não é');       // Para ser instância de "Date", tem que ter o "new"
    throw new TypeError('Esperando instância de Date');
  }
}
retornaHora(new Date());

const retornaHoraAtual = (data) => {
  if(data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('en', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}
try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHoraAtual();
  console.log(hora);
  } catch(e) {
    // Tratar erro
    //console.log(e);
  } finally {
    console.log('Tenha um bom dia');
  }
