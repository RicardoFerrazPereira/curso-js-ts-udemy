// MODO DE FAZER NO DOCUMENTAÇÃO (SITE MDN) - Recurso Nativo do Javascript

const h1 = document.querySelector('.container h1'); // Selecionar a tag <h1> dentro da classe "container"
const data = new Date();   

h1.innerHTML = data.toLocaleDateString('pt-BR',{ dateStyle: 'full'});  //timeStyle: 'short' // não está funcionando

// MODO DE FAZER COM ARRAY //////////////////////////////////////////////////////////////////////////////////////

// const h1 = document.querySelector('.container h1'); // Selecionar a tag <h1> dentro da classe "container"
// const data = new Date();   

// const getNomeMes = (numeroMes) => {
//     const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro',
//                     'outubro', 'novembro', 'dezembro'];
//     return meses [numeroMes];
// }

// const getDiaSemanaTexto = (diaSemana) => {
//     const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
//     return diasDaSemana [diaSemana];
// };

// const zeroAEsquerda = (num) => {
//     return num >= 10 ? num : `0${num}`;
// }

// const criaData = (data) => {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()}` +
//     ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
// }

// h1.innerHTML = criaData(data);


///////////////////////////////////////////////////////////////////////////////////////////////////////

// MODO DE FAZER = Switch/Case

// const h1 = document.querySelector('.container h1'); // Selecionar a tag <h1> dentro da classe "container"
// const data = new Date();

// const getDiaSemanaTexto = (diaSemana) => {

//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             return diaSemanaTexto;
//         case 1:
//             diaSemanaTexto = 'Segunda';
//             return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça';
//             return diaSemanaTexto;
//         case 3:
//             diaSemanaTexto = 'Quarta';
//             return diaSemanaTexto;
//         case 4:
//             diaSemanaTexto = 'Quinta';
//             return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta';
//             return diaSemanaTexto;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             return diaSemanaTexto;
//         default:
//             diaSemanaTexto = 'Esse dia não existe';
//             return diaSemanaTexto;
//     }
// }

// const getNomeMes = (numeroMes) => {

//     let nomeMes;

//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'maio';
//             return nomeMes;
//         case 5:
//             nomeMes = 'junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'dezembro';
//             return nomeMes;
//         default:
//             nomeMes = 'Mês não existe';
//             return nomeMes;
//     }
// }

// const zeroAEsquerda = (num) => {
//     return num >= 10 ? num : `0${num}`;
// }

// const criaData = (data) => {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//     ` de ${data.getFullYear()}` +
//     ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
// }

// h1.innerHTML = criaData(data);