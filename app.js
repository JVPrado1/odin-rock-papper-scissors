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
        let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura!").toLowerCase();

        if (escolhaUsuario === `papel`) {
            return `papel`;
        } else if (escolhaUsuario === `pedra`) {
            return `pedra`;
        } else if (escolhaUsuario === `tesoura`) {
            return `tesoura`;
        }
    }

   