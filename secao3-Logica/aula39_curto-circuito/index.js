/*
VALORES AVALIADOS COM FALSO EM JS

- false
- 0
- '' "" `` (string vazia)
- null / undefined
- NaN

-------------------

&& => false && true -> false (retorna o valor falso)
&& => true && true -> true (retorna o valor da ultima expressão verdadeira)

|| => false || true => true (retorna o primeiro "valor verdadeiro" avaliado)
|| => false || false => false (retorna o último valor falso avaliado)

Podemos fazer estruturas lógicas usando o AND (&&) e o OR (||)

*/

console.log(true && 'Vasco');
console.log('Vasco' && 'Gama');

console.log('Vasco' && '');
console.log('Vasco' && undefined);
console.log('Vasco' && NaN);

const falaOi = () => {
    return 'Oi';
}

let vaiExecutar = true;
 console.log(vaiExecutar && falaOi());

 const corUsuario = null;
 const corPadrao = corUsuario || 'preto';
 console.log(corPadrao);

 const corUsuario1 = 'vermelho';
 const corPadrao1 = corUsuario1 || 'preto';
 console.log(corPadrao1);

 const a = 0;
 const b = null;
 const c = 'false'; // esse valor é verdadeiro, pois é uma string que contém um valor
 const d = false;
 const e = NaN;
 console.log(a || b || c || d || e);

 const y = 0;
 const x = null;
 const w = false;
 const z = NaN;
 console.log(y || x || w || z );