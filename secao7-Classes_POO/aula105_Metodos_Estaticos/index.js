// Métodos estáticos -> são métodos que vc pode acessar na classe 
// sem instânciar a classe (sem utilizar a palavra new) e não tem acesso
// ao dados da instância

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }
    // Método estático
    static trocaPilha() {
        console.log('OK, vou trocar');
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();
