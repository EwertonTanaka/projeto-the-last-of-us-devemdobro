const botoescarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
botoescarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        
        botaoSelecionado.classList.remove('selecionado');
        
        selecionarBotaoCarrossel(botao);
        
        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
