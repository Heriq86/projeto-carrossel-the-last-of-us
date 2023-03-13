//1 - pegar os elementos html dos botoes e imagems.
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem'); 

//2 - indentificar o clique do usúario nos botões
botoesCarrossel.forEach((botao, indice)=>{
    botao.addEventListener('click', () => {
        
        desativarBotaoSelecionado();
        
        ativarBotaoSelecionado(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    });
});


function ativarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

