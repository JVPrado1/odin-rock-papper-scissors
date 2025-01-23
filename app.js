let escolhaPc = realizarJogadaPc();
console.log(escolhaPc);
let escolhaJogador = ``;
let pontuacaoJogador = 0;
let pontuacaoComputador = 0;

function realizarJogadaPc() {
    const choices = [`pedra`, `papel`, `tesoura`];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];   
}

function revelarCartas() {
    const cartasViradas = document.querySelectorAll(`.card__titulo`);
    cartasViradas.forEach(carta => {
        if (carta.textContent.toLowerCase() == escolhaPc) {
            carta.parentElement.classList.remove(`card__image--back`);
        }
    });
}

function esconderCartas() {
    const todasCartas = document.querySelectorAll(`.card`);
    todasCartas.forEach(carta => {
        if (!carta.classList.contains(`card-jogador`)) {
            carta.classList.add(`card__image--back`);
        }
    });
}

function atualizarPlacar(resultado) {
    const placarJogador = document.querySelectorAll('.pontuacao')[0];
    const placarComputador = document.querySelectorAll('.pontuacao')[1];

    if (resultado === 'Vitória') {
        pontuacaoJogador++;
        placarJogador.textContent = `Jogador: ${pontuacaoJogador}`;
    } else if (resultado === 'Derrota') {
        pontuacaoComputador++;
        placarComputador.textContent = `Computador: ${pontuacaoComputador}`;
    }
}

function compararResultados() {
    revelarCartas();
    
    setTimeout(() => {
        let resultado;
        if (escolhaJogador == escolhaPc) {
            let texto = document.querySelector('.teste2');
            texto.innerHTML = 'Empate!';
            texto.style.color = 'red';
            resultado = 'Empate';
        } else if (
            (escolhaJogador == 'pedra' && escolhaPc == 'tesoura') ||
            (escolhaJogador == 'papel' && escolhaPc == 'pedra') ||
            (escolhaJogador == 'tesoura' && escolhaPc == 'papel')
        ) {
            let texto = document.querySelector('.teste2');
            texto.innerHTML = 'Você venceu!';
            texto.style.color = 'red';
            resultado = 'Vitória';
        } else {
            let texto = document.querySelector('.teste2');
            texto.innerHTML = 'Você perdeu!';
            texto.style.color = 'red';
            resultado = 'Derrota';
        }
        
        atualizarPlacar(resultado);
        return resultado;
    }, 50);
}

function gerenciarBotoes(escolhaJogador) {
    const buttons = document.querySelectorAll('.container__cards .card-jogador');
    buttons.forEach(button => {
        const buttonText = button.querySelector('.card__titulo').textContent.toLowerCase();
        const imagem = button.querySelector('.card__image');
        
        buttonText !== escolhaJogador ? 
            desabilitarBotao(button, imagem) : 
            destacarBotaoSelecionado(button);
    });
    return buttons;
}

function desabilitarBotoesAdversario() {
    const botoesAdversario = document.querySelectorAll('.card:not(.card-jogador)');
    botoesAdversario.forEach(botao => {
        botao.style.pointerEvents = 'none';
        botao.style.cursor = 'default';
    });
}

function desabilitarBotao(button, imagem) {
    button.style.transition = 'all 0.3s ease';
    button.disabled = true;
    button.style.pointerEvents = 'none';
    button.style.cursor = 'default';
    button.style.backgroundColor = 'grey';
    imagem.style.filter = 'grayscale(1) brightness(0.8)';
}

function destacarBotaoSelecionado(button) {
    const titulo = button.querySelector('.card__titulo');
    const imagem = button.querySelector('.card__image');
    button.disabled = true;
    button.style.backgroundColor = '#3268b9';
    button.style.transform = 'rotateX(2deg) translateY(-10px)';
    button.style.boxShadow = '0 30px 30px rgba(0,0,0,0.3)';
    
    titulo.style.color = 'white';
    titulo.style.transform = 'translateZ(100px) translateY(-10px) scale(1.2)';
    
    imagem.style.transform = 'translateZ(100px) translateY(-10px) scale(1.2)';
    imagem.style.filter = 'drop-shadow(0 20px 20px rgba(0,0,0,0.4))';
}

function realizarJogadaUsuario(botao) {
    escolhaJogador = botao;
    const buttons = gerenciarBotoes(escolhaJogador);
    
    desabilitarBotoesAdversario();
    escolhaPc = realizarJogadaPc();
    compararResultados();

    console.log(`Jogador:`, escolhaJogador);
    console.log(`Computador:`, escolhaPc);

    setTimeout(() => {
        esconderCartas();
        reiniciarJogo();
    }, 2000);
}

function reiniciarJogo() {
    const buttons = document.querySelectorAll('.card-jogador');
    const botoesAdversario = document.querySelectorAll('.card:not(.card-jogador)');
    const texto = document.querySelector('.teste2');

    buttons.forEach(button => {
        button.disabled = false;
        button.style = '';
        const imagem = button.querySelector('.card__image');
        const titulo = button.querySelector('.card__titulo');
        titulo.style = '';
        imagem.style = '';
    });

    botoesAdversario.forEach(botao => {
        botao.style = '';
        botao.classList.add('card__image--back');
    });

    texto.innerHTML = 'Desenvolvido por João Victor Prado';
    texto.style = '';

    escolhaJogador = '';
    escolhaPc = realizarJogadaPc();
}