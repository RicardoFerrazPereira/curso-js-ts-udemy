// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, ''); // substitui tudo que não for número por nada
        }
    })
}
// Criar o método "valida" no prototype
ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false; // Se cpf não for enviado, retorne falso
    if(this.cpfLimpo.length !== 11) return false; // Se o tamanho do cpf for diferente de 11, return falso
    if(this.ehSequencia()) return false; // Se o número for uma sequência

    const variavelCPF = this.cpfLimpo.slice(0, -2); // Pegar os nove primeiros digitos do cpf ->  slice inicia do indice 0 e vai até o iíndice -2 (penúltimo)
    const digito1 = this.criaDigito(variavelCPF);
    const digito2 = this.criaDigito(variavelCPF + digito1);
    
    const novoCpf = variavelCPF + digito1 + digito2; // Criar um cpf e comparar com o que foi enviado para gente
    return novoCpf === this.cpfLimpo;
}
// Método que recebe os números do cpf e fazer o cálculo dos digitos
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
   const cpfArray = Array.from(cpfParcial);

   let regressivo = cpfArray.length + 1; // Variável de contador regressivo
   const total = cpfArray.reduce((acumulador, valor) => {
    acumulador += (regressivo * Number(valor));
    regressivo--;
    return acumulador;
   }, 0);  // Acumulador vai começãr de 0 

   const digito = 11 - (total % 11);  // 11 - o resto da divisão entre total e 11
   return digito > 9 ? '0' : String(digito); // se o digito for maior que 9, retorna 0, senão retorna o próprio digito 
   
}

ValidaCPF.prototype.ehSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // Repetir o primeiro caractere 11 vezes
    return(sequencia === this.cpfLimpo); // Se meu primeiro caractere repetido 11 vezes for igual ao "cpfLimpo", quer dizer que é uma sequÊncia
}

// Converter o "cpfParcial" em um array
const cpf = new ValidaCPF('705.484.450-52');
//console.log(cpf);
//console.log(cpf.cpfLimpo);
//console.log(cpf.valida());

if(cpf.valida()) {
    console.log('CPF Válido');
}else {
    console.log('CPF Inválido');
}