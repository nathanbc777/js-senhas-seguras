const numeroSenha = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorALL('.parametro-senha__botao');

let tamanhoSenha = 12;

botoes[0].onclick = diminuiTamanho;
botoes[0].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1 ) {
       tamanhoSenha = tamanhoSenha - 1; 
    }
    numeroSenha.textContext = tamanhoSenha;  
}

function aumentaTamanho() {
    if (tamanhoSenha < 20 ) {
        tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContext = tamanhoSenha;  
}

const campoSenha = document.querySelector('campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
geraSenha() {
    let senha = '';
    for (let i=0; i< tamanhoSenha; i++) {
         let numeroAleatorio = Math.random() * letrasMaiusculas.length;
         numeroAleatorio = Math.floor(numeroAleatorio);
         senha = senha + letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}