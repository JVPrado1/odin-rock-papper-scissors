let pontuacaoUsuario = 0
let pontuacaoPc = 0

function escolhaComputador() {
    let randomNumber = parseInt(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        console.log(`Pedra`);
        return `pedra`;
    } else if (randomNumber === 2) {
        console.log(`Papel`);
        return `papel`;
    } else if (randomNumber === 3) {
        console.log(`Tesoura`);
        return `tesoura`;
    } 
}

function jogadaUsuario() {
    let escolhaUsuario = prompt(`Faça sua escolha: PEDRA, PAPEL ou TESOURA`).toLowerCase();

    if (escolhaUsuario === `papel`) {
        return `papel`;
    } else if (escolhaUsuario === `pedra`) {
        return `pedra`;
    } else if (escolhaUsuario === `tesoura`) {
        return `tesoura`;
    } else {
        console.log(`Ops! Escolha apenas PEDRA, PAPEL ou TESOURA para jogar!`)
        return jogadaUsuario();
    }
}

function iniciarRodada() {
    const pcPlay = String(escolhaComputador());
    const userPlay = String(jogadaUsuario());
    
    let mensagem = `Você escolheu ${userPlay.charAt(0).toUpperCase() + userPlay.slice(1)} e o computador escolheu ${pcPlay.charAt(0).toUpperCase() + pcPlay.slice(1)}!`
     
    if (pcPlay === userPlay) {
        mensagem += `\n\nEmpate!`;
    } else if (
        (pcPlay === `pedra` && userPlay === `tesoura`) ||
        (pcPlay === `tesoura` && userPlay === `papel`) ||
        (pcPlay === `papel` && userPlay === `pedra`)
    ) {
        mensagem += `\n\nVitória do computador!`;
        pontuacaoPc++;
    } else {
        mensagem += `\n\nVitória do jogador!`;
        pontuacaoUsuario++;
    }        

    console.log(`${mensagem}\n\nA pontuação atual é:\n\nUsuário: ${pontuacaoUsuario}\nPC: ${pontuacaoPc}`);
    alert(`${mensagem}\n\nA pontuação atual é:\n\nUsuário: ${pontuacaoUsuario}\nPC: ${pontuacaoPc}`);
}

function iniciarJogo() {
    for (let i = 0; i < 5; i++) {
        iniciarRodada();
    }
}

iniciarJogo()