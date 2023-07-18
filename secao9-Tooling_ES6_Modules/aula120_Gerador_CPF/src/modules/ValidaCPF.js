// 705.484.450-52 070.987.720-03
export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false, // não pode escrever nela
            enumerable: true, // vai aparecer quando der um console.log na classe
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') // substitui tudo que não for número por nada
            
        })
    }

    valida() {
        if(!this.cpfLimpo) return false; // se não existir a variável cpfLimpo retorne falso
        if(typeof this.cpfLimpo !== 'string') return false; // se tipo do cpfLimpo for diferente de string, retorne falso
        if(this.cpfLimpo.length !== 11) return false; // Se o tamanho do cpf for diferente de 11, return falso
        if(this.ehSequencia()) return false; // Vai barrar se for uma sequência
        this.geraNovoCpf();
        
        return this.novoCPF === this.cpfLimpo;
    }

    ehSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; // Vai repetir 11 vezes o primeiro caractere e seu for igual ao cpfLimpo, quer dizer que é uma sequência
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
    // Quando eu não utilizo a palavra 'this' dentro de um método, significa que ele pode se tornar estático
    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
       
    }
}
