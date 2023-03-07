function Calculadora() {
   this.display = document.querySelector('.display');

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;

            if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            if(elemento.classList.contains('btn-clear')) this.clear();
            if(elemento.classList.contains('btn-del')) this.del(elemento);
            if(elemento.classList.contains('btn-eq')) this.realizaConta(elemento);            
        });
    };

    this.addNumDisplay = (elemento) => this.display.value += elemento.innerText;   
    this.clear = () => this.display.value = '';
    this.inicia = () => this.capturaCliques();   
}

const calculadora = new Calculadora();
calculadora.inicia();
