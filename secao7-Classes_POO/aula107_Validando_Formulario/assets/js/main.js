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
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) { // se os campos validos e senhas validas retornarem true, envie o formulario
            alert('Formulário enviado');
            this.formulario.submit(); // envie o formulário
        }
       
    }

    senhasSaoValidas() {
        let valido = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.rsenha');

        if(senha.value !== repetirSenha.value) {
            valido = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisa ser iguais.');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisa ser iguais.');
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            valido = false;
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');

        }

        return valido;
    }

    camposSaoValidos() {
        let valido = true;

        for(let mensagemErro of this.formulario.querySelectorAll('.mensagem-erro')) // selecionar todas as tags de mensagem-erro
            mensagemErro.remove(); // quando enviar o formulários, as mensagens de erro serão removidas

        for(let campo of this.formulario.querySelectorAll('.validar')) { // Vai selecionar todos os inputs. Cada volta do laço, ele checa se os campos estão vazios
           const label = campo.previousElementSibling.innerHTML // elemento irmão anterior (label anterior ao input) -> para saber em qual input foi o erro
            if(!campo.value) {  // se o campo estiver vazio
            this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valido = false;
            }

            if(campo.classList.contains('cpf')) {  // se for um campo de cpf
                if(!this.validaCPF(campo)) valido = false;  // se for diferente de validaCPF, flag (valid) = falso
            }

            if(campo.classList.contains('usuario')) {  // se for um campo de cpf
                if(!this.validaUsuario(campo)) valido = false;  // se for diferente de validaCPF, flag (valid) = falso
           
            }
        }

        return valido;
    }

    validaUsuario(campo) {
        const usuario = campo.value; // pegar o valor do campo "usuario"
        let valido = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valido = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {  // expressão regular -> qualquer letra entra a e z minusculo, qualquer letra entre A e Z maiusculo e qualquer numero de 0 a 9
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
            valido = false;
        }

        return valido;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()) {  // retornando false para cpf inválido
            this.criaErro(campo, 'CPF inválido');
            return false;
        }

        return true;  // retornando true para cpf válido
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