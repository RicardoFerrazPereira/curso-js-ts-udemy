class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');  // selecionar formulários
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); // capturar o evento
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // formulario não vai ser enviado
        const camposValidos = this.camposSaoValidos();// validar o campos, vê se estão em branco
       
    }

    camposSaoValidos() {
        let valido = true;

        for(let campo of this.formulario.querySelectorAll('.validar')) { // Vai selecionar todos os inputs. Cada volta do laço, ele checa se os campos estão vazios
           const label = campo.previousElementSibling.innerHTML // elemento irmão anterior (label anterior ao input) -> para saber em qual input foi o erro
            if(!campo.value) {  // se o campo estiver vazio
                this.criaErro(campo, 'Campo tal não pode estar em branco.');
                valido = false;
            }
        }
    }
    
    criaErro(campo, msg) {
        // Em qual campo o erro ocorreu?
        const div = document.createElement('div') // Criar um <div> para receber a mensagem de erro
        div.innerHTML = msg; // Jogar a mensagem na <div>
        div.classList.add('mensagem-erro'); // colocar uma classe, com o nome 'mensagem-erro', na <div>
        // Inserir o erro logo depois do campo onde ocorreu
        campo.insertAdjacentElement('afterend', div); // depois do campo (afterend), inserir o elemento <div>

    }

}

const valida = new ValidaFormulario();