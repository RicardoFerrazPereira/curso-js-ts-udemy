/////////  1  ////////////

// import { nome , idade, soma } from './modulo1';

// console.log(nome, idade);
// console.log(soma(5, 5));

/////////  2  ///////////

// import { nome as name , idade, soma } from './modulo1';

// const nome = 'Eddie';

// console.log(nome, name, idade);
// console.log(soma(5, 5));

/////////  3  ///////////

// import { nome, anos, soma } from './modulo1';

// const idade = 8;

// console.log(nome, anos, idade);
// console.log(soma(5, 5));


/////////  4  //////////

// import { nome, idade, soma, Pessoa } from './modulo1';

// const p1 = new Pessoa('Ricardo', 'Ferraz');
// console.log(p1);

///// IMPORTA TUDO

// import * as MeuModulo from './modulo1'; // Exportar tudo e nomeia de MeusModulos, de modulo1

// console.log(MeuModulo);

// DEFAULT -> sempre que a gente importar sem chave, estaremos importando do default

// import qualquerNome from './modulo1'; // Qualquer coisa que eu importo sem as chave {}, ele busca pelo padrão (default)

// console.log(qualquerNome(4, 4));

//// EXPORTANDO COMO DEFAULT

import multiplica, {nome, idade, soma } from './modulo1';
console.log(multiplica(20, 35));
console.log('Vasco', 'Gama', 23, (50, 50));
