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