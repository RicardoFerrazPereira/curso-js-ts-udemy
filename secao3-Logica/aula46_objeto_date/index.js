// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date#two%20digit%20years

// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date (tresHoras + umDia);

// const data1 = new Date(2019, 3, 20, 15, 14, 27, 100); // ano, mes, dia, hora, min, seg, milissegundo
// const data2 = new Date(2019, 3, 20, 15, 14, 27);  // ano, mes, dia, hora, min, seg
// const data3 = new Date(2019, 3, 20, 15, 14); // ano, mes, dia, hora, min
// const data4 = new Date(2019, 3, 20, 15); // ano, mes, dia, hora
// const data5 = new Date(2019, 3, 20); // ano, mes, dia, hora
// const data6 = new Date(2019, 3); // ano, mes
// const data7 = new Date(2019); // milissegundo

// console.log(data1.toString());
// console.log(data2.toString());
// console.log(data3.toString());
// console.log(data4.toString());
// console.log(data5.toString());
// console.log(data6.toString());
// console.log(data7.toString());


// const data8 = new Date ('2019-04-20 23:15:59');

// console.log('Dia', data8.getDate());
// console.log('Mês', data8.getMonth()); // Mês começa do zero
// console.log('Ano', data8.getFullYear());
// console.log('Hora', data8.getHours());
// console.log('Min', data8.getMinutes());
// console.log('ms', data8.getMilliseconds());
// console.log('Dia Semana', data8.getDay()); // 0 = Domingo, 6 = Sábado
// console.log(data8.toString());

// console.log(Date.now()); // informa a data em milisegundos
// const data9 = new Date(1674433975537);
// console.log(data9);

// Função que formata data

const formataData = (data) => {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

// Função para adicionar um 0 a esquerda
const zeroAEsquerda = (num) => {
    return num >= 10 ? num : `0${num}`;
}

const data10 = new Date();
const dataBrasil = formataData(data10);
console.log(dataBrasil);