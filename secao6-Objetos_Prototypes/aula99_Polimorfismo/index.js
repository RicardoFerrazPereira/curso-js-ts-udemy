// POLIMORFISMO 
// Em Javascript é usado o polimorfismo de sobreposição (Override)
// não é usado o polimorfismo de sobrecarga.

// Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
    if(this.saldo < valor) {  // Verificar se tem saldo suficiente
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag: ${this.agencia} / Conta: ${this.conta} / Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype); // Linkar o prototype
ContaCorrente.prototype.constructor = ContaCorrente; // Retornar o construtor
// Sobescrever o método sacar()
ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) { 
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype); // Linkar o prototype
ContaPoupanca.prototype.constructor = ContaPoupanca; // Retornar o construtor

const conta1 = new Conta(11, 22, 10);
console.log(conta1)
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(34);

const contaCorrente1 = new ContaCorrente(11, 22, 0, 100);
console.log(contaCorrente1);
contaCorrente1.depositar(10);
contaCorrente1.sacar(90);
contaCorrente1.sacar(30);

const contaPoupanca1 = new ContaPoupanca(12, 33, 0);
contaPoupanca1.depositar(10);
contaPoupanca1.sacar(10);
contaPoupanca1.sacar(1);