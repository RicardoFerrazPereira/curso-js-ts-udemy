// Factory Function -> retorna um objeto
// Função para criar o objeto "calculadora"
// Sempre que for referenciar a chave de um objeto, dentro do objeto, devemos usar a palavra "this"
// Arrow Function vai sempre fixar o "this" em quem criou o objeto - Não permite alterar o "this"

const criaCalculadora = () => {
    return {
        display: document.querySelector('.display'), // atributo do objeto - chave
                
        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {  // "keyup" -> quando soltar a tecla ele dispara o evento
                if(e.keyCode === 13) {  // O keycode da tecla enter é 13
                this.realizaConta();
                }
            })
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.limpaDisplay();
              }
            });
          },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);  // eval -> é um função que entende tudo como js. O texto que tiver no display, ele vai tentar executar com javascript

                if(!conta) { // se for uma conta (NuN, undefined, ...)
                    alert('Conta Inválida');
                    return;  // return -> para sair do método
                }
                this.display.value = String(conta);

            } catch(e) {
                alert('Conta Inválida');
                return;
            }

        },

        limpaDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // Voltar uma casa -> slice, onde '0' é o tamanho da strig, e o "-1" quer dizer menos uma casa
        },

        cliqueBotoes() {   // método - atributo do objeto - chave
            document.addEventListener('click', (e) => { // Arrow Fuction fixa o this em quem criou o objeto ("calculadora"). Não precisando usar o "bind" 
                const elemento = e.target; // Em qual elemento estou clicando na página

                if(elemento.classList.contains('btn-num')) {  // se o elemento contém a classe "btn-num"
                    this.btnParaDisplay(elemento.innerText);
                } 

                if(elemento.classList.contains('btn-clear')) {
                    this.limpaDisplay();
                }

                if(elemento.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();

            })//.bind(this)); // Ao invés de usar o seu this (document) use o meu this (calculadora)
        },

       btnParaDisplay(valor) {
        this.display.value += valor; // concatenar o que tiver no display, mais o botão que foi clicado
       },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();