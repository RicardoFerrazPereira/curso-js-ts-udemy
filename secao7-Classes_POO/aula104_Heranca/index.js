class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
console.log(d1);
d1.ligar();
d1.ligar();
console.log(d1);
d1.desligar();
console.log(d1);
d1.desligar();
console.log(d1);

class Smartphone extends DispositivoEletronico { // extends -> sinaliza a herança -> smartphone herda de disp.eletronico
    constructor(nome, cor, modelo) {
        super(nome);  // chama o construtor da classe pai e executar aqui todo código
        this.cor = cor;
        this.modelo = modelo; 
    }
} 

class Tablet extends DispositivoEletronico { // extends -> sinaliza a herança -> smartphone herda de disp.eletronico
    constructor(nome, temWifi) {
        super(nome);  // chama o construtor da classe pai e executar aqui todo código
        this.temWifi = temWifi;
    }
    ligar() {
        console.log('VocÊ alterou o método ligar.');
    }
    falaOi() {
        console.log('Oi');
    }
} 

const s1 = new Smartphone('Samsung', 'Preto', 'S10');
console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1);
t1.falaOi();
//console.log(t1);
