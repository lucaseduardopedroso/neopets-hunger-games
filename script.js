document.addEventListener('DOMContentLoaded', () => {
    const playerInput = document.getElementById('playerInput');
    const addPlayerButton = document.getElementById('addPlayer');
    const startSimulationButton = document.getElementById('startSimulation');
    const nextRoundButton = document.getElementById('nextRound');
    const resetSimulationButton = document.getElementById('resetSimulation');
    const playerList = document.getElementById('playerList').querySelector('ul');
    const resultsDiv = document.getElementById('results');

    let players = [];
    let alivePlayers = [];
    let round = 0;

    // Different types of events
    const eliminatoryEvents1 = [
        player => `${player} é capturado por um grupo de Slorgs e é eliminado!`,
        player => `${player} enfrenta uma matilha de Faellies em Neopia Central e não sobrevive!`,
        player => `${player} se perde nas tumbas de Geraptiku e é eliminado!`,
        player => `${player} é atacado por um grupo de Kadoaties famintos em Neopia Central e não escapa!`,
        player => `${player} é surpreendido por um ataque de Scorchios em Mystery Island e não sobrevive!`,
        player => `${player} encontra um grupo de Koi sob a influência de uma Dark Faerie e é eliminado!`,
        player => `${player} é encurralado por um grupo de Grarrls em Tyrannia e não consegue escapar!`,
        player => `${player} é atacado por um grupo de Pteris famintos em Tyrannia e é eliminado!`,
        player => `${player} é atacado por Jhudoras Bodyguards e não sobrevive!`,
        player => `${player} tropeça e cai na Magma Pool em Moltara, sendo eliminado!`,
        player => `${player} é atacado por um grupo de Werelupes em Haunted Woods e não escapa!`,
        player => `${player} é pego em uma avalanche em Terror Mountain e não sobrevive!`,
        player => `${player} tromba em Dr. Sloth, que o extermina sem dar a chance de um pedido de desculpas!`,
        player => `${player} cai em uma armadilha para Cybunnies e é eliminado!`,
        player => `${player} é surpreendido por Jhudora em Faerieland e é eliminado!`,
        player => `${player} entala sua cabeça na misteriosa toca de Symol e acaba eliminado!`,
        player => `${player} se perde em uma névoa deixada pela The Darkest Faerie e é eliminado!`,
        player => `${player} é pisoteado por uma manada de Chombies e não sobrevive!`,
        player => `${player} é pego por uma armadilha de Thieves e é eliminado!`,
        player => `${player} é atacado por um grupo de Quiggles e não escapa!`
    ];

    const eliminatoryEvents2 = [
        (player1, player2) => `${player1} encontra ${player2} em Krawk Island e usa a Sword of Skardsen para atacar ${player2}! ${player2} é eliminado!`,
        (player1, player2) => `${player1} usa um feitiço ensinado por Fyora contra ${player2}, que não sobrevive!`,
        (player1, player2) => `${player2} desafia ${player1} para uma batalha! ${player2} é eliminado!`,
        (player1, player2) => `${player1} desafia ${player2} para uma batalha! ${player2} é eliminado!`,
        (player1, player2) => `${player1} acerta a cabeça de ${player2} com a ponta de um Super Nerkmid! ${player2} não sobrevive!`,
        (player1, player2) => `${player1} oferece um Holiday Slushie envenenado para ${player2}, que não sobrevive após beber!`,
        (player1, player2) => `${player1} usa a Espada de Skardsen para atacar ${player2} em Haunted Woods! ${player2} não sobrevive!`,
        (player1, player2) => `${player1} enfrenta ${player2} em uma batalha de Usuki em Mystery Island e ${player2} perde!`,
        (player1, player2) => `${player1} elimina acidentalmente ${player2} ao tentar demonstrar como utilizar uma Poison Snowball Wand`,
        (player1, player2) => `${player1} empurra ${player2} para dentro do poço da Wishing Well, o eliminando!`,
        (player1, player2) => `${player1} e ${player2} tentam invadir a camara de Lord Darigan em busca de armamaneto. ${player2} é eliminado por um dos guardas`,
        (player1, player2) => `${player1} entrega ${player2} a Dr. Sloth em troca de Neocola Tokens! ${player2} é eliminado!`,
        (player1, player2) => `${player1} usa uma Seasonal Attack Pea contra ${player2} enquanto grita "Merry Christmas"! ${player2} não sobrevive!`,
        (player1, player2) => `${player2} descobre o grande segredo de ${player1} e acaba eliminado pelo mesmo!`,
        (player1, player2) => `${player2} tenta emboscar ${player1} em Darigan Cidatel, mas acaba eliminado pelas mãos de ${player1}!`,
        (player1, player2) => `${player1} enfrenta ${player2} em uma competição de Usuki em Shenkuu e ${player2} perde!`,
        (player1, player2) => `${player1} e ${player2} fazem uma aliança, mas após discutirem, ${player1} elimina ${player2}!`,
        (player1, player2) => `${player1} encontra ${player2} em Terror Mountain e usa Thunder Sticks para atacar ${player2}! ${player2} é eliminado!`,
        (player1, player2) => `${player1} elimina ${player2} após confundi-lo com Chiazilla`,
        (player1, player2) => `${player1} enfrenta ${player2} em uma batalha de feitiçaria em Brightvale e ${player2} perde!`,
        (player1, player2) => `Após ${player2} furar fila do The Soup Kitchen, ${player1} elimina ${player2}.`
    ];

    const eliminatoryEvents3 = [
        (player1, player2, player3) => `${player3}, ${player1} e ${player2} enfrentam Snowager em busca de recursos, mas ${player1} acaba devorado!`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} se perdem em um labirinto de cristal em Ice Caves e ${player1} não consegue escapar!`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} se deparam com um grupo de Mutant Kadoaties famintos em Neopia Central e ${player1} não sobrevive!`,
        (player1, player2, player3) => `${player2}, ${player1} e ${player3} são pisoteados por uma manada de Chombies em Tyrannia e ${player1} não sobrevive!`,
        (player1, player2, player3) => `${player3}, ${player2} e ${player1} se perdem pelo castelo de Jhudora e ${player1} é eliminado por ela!`,
        (player1, player2, player3) => `${player3}, ${player1} e ${player2} se encontram com um grupo de Werelupes em Haunted Woods e ${player1} não sobrevive!`,
        (player1, player2, player3) => `${player2}, ${player3} e ${player1} enfrentam uma horda de Grarrls em Tyrannia e ${player1} é eliminado!`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} enfrentam um grupo de Darigan Draiks e ${player1} não sobrevive!`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} se deparam com uma avalanche em Terror Mountain e ${player1} é eliminado!`,
        (player1, player2, player3) => `${player2}, ${player3} e ${player1} enfrentam um grupo de Snowbunnies em Terror Mountain e ${player1} não sobrevive!`,
        (player1, player2, player3) => `${player3} e ${player2} eliminam ${player1} com Bony Grarrl Clubs`,
        (player1, player2, player3) => `${player2} e ${player3} armam uma emboscada para ${player1}, que não escapa!`,
        (player1, player2, player3) => `${player2} e ${player3} lançam ${player1} no vulcão de Mystery Island.`,
        (player1, player2, player3) => `${player2} e ${player3} afogam ${player1} na Magma Pool.`,
        (player1, player2, player3) => `${player2} e ${player3} sabotam as cordas de ${player1} enquanto ele escalava as montanhas Terror Mountain, que não sobrevive.`,
        (player1, player2, player3) => `${player3} e ${player2} treinam um grupo de Grarrls para atacar ${player1}, que é eliminado.`,
        (player1, player2, player3) => `${player2} e ${player3} emboscam ${player1} em uma das tumbas de Qasala e o elimina.`,
        (player1, player2, player3) => `${player3}, ${player1} e ${player2} se deparam com um grupo de Tiki Terrors em Tiki Tack e ${player1} não escapa!`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} faziam manobras com espadas, quando ${player1} acaba se eliminando!`,
        (player1, player2, player3) => `${player3}, ${player1} e ${player2} se unem para atacar Dr. Sloth, mas ${player1} não sobrevive!`
    ];

    const standardEvents1 = [
        player => `${player} vê uma estranha luz em Shenkuu e decide investigar, sem encontrar nada.`,
        player => `${player} visita Faerieland e mergulha em Healing Springs para curar-se.`,
        player => `${player} encontra um objeto misterioso em Haunted Woods e decide guardar para mais tarde.`,
        player => `${player} encontra um Pincel Invisível e pensa em usa-lo a seu favor.`,
        player => `${player} pisa em um Dung Mote enquanto caminha.`,
        player => `${player} avista soldados do Dr. Sloth se aproximando e se esconde.`,
        player => `${player} encontra cinco dobrões no chão.`,
        player => `${player} encontra um mapa antigo em Lutari Island e o estuda para procurar mais informações.`,
        player => `${player} encontra com Koi Warrior e aprende uma nova técnica de combate.`,
        player => `${player} descobre uma área secreta em Mystery Island e a explora em busca de tesouros.`,
        player => `${player} encontra um antigo pergaminho em Brightvale e aprende um novo feitiço.`,
        player => `${player} se depara com um comerciante de poções em Neopia Central e compra uma Poção de Cura.`,
        player => `${player} encontra com Jhudora e não exita em pedir uma selfie.`,
        player => `${player} descobre um atalho em Terror Mountain e economiza tempo em sua jornada.`,
        player => `${player} encontra uma pista deixada por um oponente e decide segui-la.`,
        player => `${player} pechincha por um item em Tyrannia.`,
        player => `${player} descobre uma caverna secreta em Moltara e a explora.`,
        player => `${player} encontra um antigo símbolo em Dacardia e o usa para obter um bônus.`,
        player => `${player} encontra um novo aliado em Altador e decide formar uma aliança.`,
        player => `${player} descobre um novo truque de magia com Jhudora e o pratica.`,
        player => `${player} encontra um item especial em Kreludor e o adiciona ao seu inventário.`,
        player => `${player} vê uma estranha luz em Virtupets Space Station e decide investigar, mas não encontra nada.`,
    ];

    const standardEvents2 = [
        (player1, player2) => `${player1} discute calorosamente com ${player2} sobre qual a melhor Usuki já lançada.`,
        (player1, player2) => `${player1} e ${player2} têm uma disputa amigável sobre qual edição do Neopian Times mudou a forma do jornalismo.`,
        (player1, player2) => `${player1} e ${player2} discutem quais páginas do álbum de selos merece um avatar.`,
        (player1, player2) => `${player1} e ${player2} debatem sobre qual a melhor estratégia para vencer o Kacheek Seek.`,
        (player1, player2) => `${player1} e ${player2} murmuram sobre os valores dos TCGs.`,
        (player1, player2) => `${player1} e ${player2} discordam sobre qual a melhor poção mágica para usar em combate.`,
        (player1, player2) => `${player1} e ${player2} debatem sobre o melhor pet para cuidar na ilha dos Koi.`,
        (player1, player2) => `${player1} e ${player2} dançam com um grupo de Island Grundos.`,
        (player1, player2) => `${player1} e ${player2} trocam itens.`,
        (player1, player2) => `${player1} e ${player2} têm uma discussão sobre a eficácia dos itens de combate em Brightvale.`,
        (player1, player2) => `${player1} e ${player2} comentam sobre o que esperam das próximas edições da UsukiCon.`,
        (player1, player2) => `${player1} e ${player2} debatem sobre as vantagens dos feitiços de Shenkuu.`,
        (player1, player2) => `${player1} e ${player2} encontram uma pilha de pedras místicas.`,
        (player1, player2) => `${player1} e ${player2} gargalham ao avistarem um Mutant Gnorbu.`,
        (player1, player2) => `${player1} e ${player2} se olham fixamente por alguns segundos, e são interrompidos pela aparição de um Snowbunny.`,
        (player1, player2) => `${player1} e ${player2} dividem recursos e cogitam uma aliança.`,
        (player1, player2) => `${player1} e ${player2} fazem uma batalha de dança.`,
        (player1, player2) => `${player1} e ${player2} relembram as melhores discussões do Neopets Brasil.`,
        (player1, player2) => `${player1} e ${player2} elaboram um plano para tomarem Roo Island.`,
        (player1, player2) => `${player1} e ${player2} gritam sem motivo aparente.`,
        (player1, player2) => `${player1} e ${player2} decidem dividir o mesmo saco de dormir.`
    ];

    const standardEvents3 = [
        (player1, player2, player3) => `${player1} faz uma aliança com ${player2} e tentam emboscar ${player3} em Haunted Woods, mas sem sucesso.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} se reúnem para planejar a próxima grande aventura em Krawk Island.`,
        (player1, player2, player3) => `${player1} e ${player2} formam uma equipe com ${player3} para explorar as cavernas de Brightvale.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} formam uma equipe para competição de Kacheek Seek.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} se reúnem para organizar uma competição de poesia em Neopia Central.`,
        (player1, player2, player3) => `${player1} e ${player2} decidem se unir para enfrentar ${player3}, que foge ao perceber.`,
        (player1, player2, player3) => `${player1} e ${player2} convencem ${player3} de que é preciso se unirem contra o Dr. Sloth.`,
        (player1, player2, player3) => `${player1} e ${player2} dormiam abraçados, quando ${player3} apareceu um pouco confuso.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} formam uma equipe para explorarem as profundezas de Maraqua.`,
        (player1, player2, player3) => `${player1} estapeia ${player2}, ${player3} tenta apaziguar a discussão.`,
        (player1, player2, player3) => `${player1} segura ${player2} pelas mãos e o afasta de ${player3} que estava acompanhado de um Swamp Gas Kiko.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} comemoram ao encontrarem The Rainbow Fountain ativa.`,
        (player1, player2, player3) => `${player1} e ${player2} seguram ${player3} e o expõe ao raio do laboratório secreto.`,
        (player1, player2, player3) => `${player1} coloca ${player2} contra ${player3} ao contar mentiras sobre um ocorrido entre eles em uma balada em Tyrannia.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} decidem nadar em Kiko Lake sem roupas, e são surpreendidos por um grupo de Kikos agressivos.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} formam uma equipe para enfrentar um grupo de Snowbunnies em Terror Mountain.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} se reúnem para criar novas estratégias de combate em Meridell.`,
        (player1, player2, player3) => `${player1} e ${player2} tentam empurrar ${player3} na Magma Pool, mas ${player3} consegue escapar.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} caçam para alimentar um grupo de Kadoaties.`,
        (player1, player2, player3) => `${player1}, ${player2} e ${player3} questionam se Blumaroo Steak é realmente feito de Blumaroos.`,
    ];

    const standardEvents4 = [
        (player1, player2, player3, player4) => `${player1} e ${player2} encontram ${player3} e ${player4} e sugerem formar uma banda cover de M*YNCI.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} organizam uma competição de Cheeseroller com ${player3} e ${player4}.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} se encontram com ${player3} e ${player4} e decidem montar um novo time para a Copa de Altador.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} convidam ${player3} e ${player4} para uma caça ao tesouro em Mystery Island.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} desafiam ${player3} e ${player4} para uma batalha de Petpets.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} se juntam a ${player3} e ${player4} para explorar as ruínas de Geraptiku.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} convidam ${player3} e ${player4} para uma competição de pesca em Maraqua.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} formam uma equipe com ${player3} e ${player4} para colherem neggs.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} encontram ${player3} e ${player4} e decidem disputar uma partida de Yooyuball em Altador.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} convidam ${player3} e ${player4} para um piquenique em Meridell.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} competem contra ${player3} e ${player4} em uma corrida de obstáculos no Lost Desert.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} formam uma aliança com ${player3} e ${player4} para enfrentar os perigos de Darigan Cidatel.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} se juntam a ${player3} e ${player4} para explorarem a misteriosa Lutari Island.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} encontram ${player3} e ${player4} e decidem formar uma equipe para enfrentar o Pant Devil.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} fazem uma trégua com ${player3} e ${player4} para caçarem por outros oponentes.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} desafiam ${player3} e ${player4} para um duelo de Fashion Fever.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} organizam um festival de música em Tyrannia com a ajuda de ${player3} e ${player4}.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} encontram ${player3} e ${player4} e decidem criar uma nova guilda em Faerieland.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} se unem a ${player3} e ${player4} para tietarem Fyora na Torra Oculta.`,
        (player1, player2, player3, player4) => `${player1} e ${player2} competem contra ${player3} e ${player4} em um concurso de culinária em Shenkuu.`
    ];
    

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function getRandomPlayers(num) {
        let shuffled = alivePlayers.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    function createEvent(eventType) {
        const playersCount = alivePlayers.length;

        if (eventType === 'eliminatory1') {
            if (playersCount === 0) return null;
            const [player] = getRandomPlayers(1);
            const event = getRandomElement(eliminatoryEvents1)(player);
            alivePlayers = alivePlayers.filter(p => p !== player);
            return event;
        } else if (eventType === 'eliminatory2') {
            if (playersCount < 2) return null;
            const [player1, player2] = getRandomPlayers(2);
            const event = getRandomElement(eliminatoryEvents2)(player1, player2);
            alivePlayers = alivePlayers.filter(p => p !== player2);
            return event;
        } else if (eventType === 'eliminatory3') {
            if (playersCount < 3) return null;
            const [player1, player2, player3] = getRandomPlayers(3);
            const event = getRandomElement(eliminatoryEvents3)(player1, player2, player3);
            alivePlayers = alivePlayers.filter(p => p !== player1);
            return event;
        } else if (eventType === 'standard1') {
            if (playersCount === 0) return null;
            const [player] = getRandomPlayers(1);
            return getRandomElement(standardEvents1)(player);
        } else if (eventType === 'standard2') {
            if (playersCount < 2) return null;
            const [player1, player2] = getRandomPlayers(2);
            return getRandomElement(standardEvents2)(player1, player2);
        } else if (eventType === 'standard3') {
            if (playersCount < 3) return null;
            const [player1, player2, player3] = getRandomPlayers(3);
            return getRandomElement(standardEvents3)(player1, player2, player3);
        } else if (eventType === 'standard4') {
            if (playersCount < 4) return null;
            const [player1, player2, player3, player4] = getRandomPlayers(4);
            return getRandomElement(standardEvents4)(player1, player2, player3, player4);
        }

        return null;
    }

    function createEventsForRound() {
        let roundEvents = [];
        const numEliminations = round === 5 ? 1 : Math.min(2, alivePlayers.length - 1);
        const numStandardEvents = Math.max(0, 4 - numEliminations);

        // Create elimination events first
        for (let i = 0; i < numEliminations; i++) {
            const eliminatoryType = `eliminatory${Math.floor(Math.random() * 3) + 1}`;
            const eliminationEvent = createEvent(eliminatoryType);
            if (eliminationEvent) {
                roundEvents.push(eliminationEvent);
            }
        }

        // Create standard events
        while (roundEvents.length < 4 && alivePlayers.length > 0) {
            const standardType = `standard${Math.floor(Math.random() * 4) + 1}`;
            const standardEvent = createEvent(standardType);
            if (standardEvent) {
                roundEvents.push(standardEvent);
            }
        }

        // Ensure every active player is involved
        let involvedPlayers = new Set();
        roundEvents.forEach(event => {
            if (event) {
                const matches = event.match(/\b(\w+)\b/g);
                if (matches) {
                    matches.forEach(name => {
                        if (alivePlayers.includes(name)) {
                            involvedPlayers.add(name);
                        }
                    });
                }
            }
        });

        // Add missing players if necessary
        if (involvedPlayers.size < alivePlayers.length) {
            const missingPlayers = alivePlayers.filter(p => !involvedPlayers.has(p));
            missingPlayers.forEach(player => {
                const standardEvent = createEvent('standard1');
                if (standardEvent) {
                    roundEvents.push(standardEvent);
                    involvedPlayers.add(player);
                }
            });
        }

        return roundEvents;
    }

    function runRound() {
        round++;
        resultsDiv.innerHTML += `<h3>Rodada ${round}</h3>`;

        let roundResults;

        if (round === 5 && alivePlayers.length === 2) {
            // Special case for the last round
            roundResults = [
                createEvent('eliminatory2')
            ];
        } else {
            roundResults = createEventsForRound();
        }

        // Randomize order of events
        roundResults = roundResults.filter(event => event).sort(() => 0.5 - Math.random());

        roundResults.forEach(result => {
            if (result) {
                resultsDiv.innerHTML += `<p>${result}</p>`;
            }
        });

        // Check for a winner or continue
        if (alivePlayers.length === 1) {
            const winner = alivePlayers[0];
            resultsDiv.innerHTML += `<h2>Vencedor: ${winner}</h2>`;
            nextRoundButton.disabled = true;
        } else if (round >= 5 && alivePlayers.length <= 1) {
            resultsDiv.innerHTML += `<h2>Não há vencedores. O jogo terminou!</h2>`;
            nextRoundButton.disabled = true;
        } else {
            updateButtons();
        }
    }

    function startSimulation() {
        round = 0;
        alivePlayers = [...players];
        resultsDiv.innerHTML = '';
        runRound();
    }

    function addPlayer() {
        const playerName = playerInput.value.trim();
        if (playerName && !players.includes(playerName)) {
            players.push(playerName);
            alivePlayers.push(playerName);
            const li = document.createElement('li');
            li.textContent = playerName;
            playerList.appendChild(li);
            playerInput.value = '';
            updateButtons();
        }
    }

    function updateButtons() {
        startSimulationButton.disabled = players.length < 10;
        nextRoundButton.disabled = alivePlayers.length <= 1;
    }

    playerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addPlayer();
    });
    addPlayerButton.addEventListener('click', addPlayer);
    startSimulationButton.addEventListener('click', startSimulation);
    nextRoundButton.addEventListener('click', runRound);
    resetSimulationButton.addEventListener('click', () => {
        location.reload();
    });

    updateButtons();
});
