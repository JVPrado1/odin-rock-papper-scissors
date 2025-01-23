let escolhaPc = realizarJogadaPc();
console.log(escolhaPc);
let escolhaJogador = ``;

// Função para o computador fazer a jogada
function realizarJogadaPc() {
    const choices = [`pedra`, `papel`, `tesoura`];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];   
}

// Função que revela a jogada do PC
function revelarCartas() {
    const cartasViradas = document.querySelectorAll(`.card__titulo`);
    cartasViradas.forEach(carta => {
        if (carta.textContent.toLowerCase() == escolhaPc) {
            carta.parentElement.classList.remove(`card__image--back`);
        }
    });
}

// Função para esconder as cartas
function esconderCartas() {
    const todasCartas = document.querySelectorAll(`.card`);
    todasCartas.forEach(carta => {
        if (!carta.classList.contains(`card-jogador`)) {
            carta.classList.add(`card__image--back`);
        }
    });
}

// Função para comparar os resultados
function compararResultados() {
    revelarCartas();
    
    setTimeout(() => {
        if (escolhaJogador == escolhaPc) {
            alert(`Empate!`);
            return `Empate`;
        } else if (
            (escolhaJogador == `pedra` && escolhaPc == `tesoura`) ||
            (escolhaJogador == `papel` && escolhaPc == `pedra`) ||
            (escolhaJogador == `tesoura` && escolhaPc == `papel`)
        ) {
            alert(`Você venceu!`);
            return `Vitória`;
        } else {
            alert(`Você perdeu!`);
            return `Derrota`;
        }
    }, 100);
}


// Função que realiza a jogada do Jogador
function realizarJogadaUsuario(botao) {
    // Define a escolha do jogador
    escolhaJogador = botao;
    
    // Gera nova jogada do computador
    escolhaPc = realizarJogadaPc();
    
    // Compara os resultados
    compararResultados();
    
    console.log(`Jogador:`, escolhaJogador);
    console.log(`Computador:`, escolhaPc);
    
    setTimeout(() => {
        esconderCartas();
    }, 1000);
}