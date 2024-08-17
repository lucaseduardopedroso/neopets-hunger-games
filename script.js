document.addEventListener('DOMContentLoaded', () => {
    const playerInputs = document.querySelectorAll('.playerInput');
    const genderInputs = document.querySelectorAll('.genderInput');
    const startSimulationButton = document.getElementById('startSimulation');
    const nextRoundButton = document.getElementById('nextRound');
    const resetSimulationButton = document.getElementById('resetSimulation');
    const resultsDiv = document.getElementById('results');

    let players = [];
    let alivePlayers = [];
    let round = 0;

    function getPronouns(player) {
        return player.gender === 'male' ? { subject: 'ele', object: 'o', possessive: 'seu' } : { subject: 'ela', object: 'a', possessive: 'sua' };
    }

    function createEvent(eventType) {
        const playersCount = alivePlayers.length;

        if (eventType === 'eliminatory1') {
            if (playersCount === 0) return null;
            const [player] = getRandomPlayers(alivePlayers, 1);
            const pronouns = getPronouns(player);
            const event = getRandomElement(eliminatoryEvents1)(player.name, pronouns);
            alivePlayers = alivePlayers.filter(p => p.name !== player.name);
            return event;
        } else if (eventType === 'eliminatory2') {
            if (playersCount < 2) return null;
            const [player1, player2] = getRandomPlayers(alivePlayers, 2);
            const pronouns1 = getPronouns(player1);
            const pronouns2 = getPronouns(player2);
            const event = getRandomElement(eliminatoryEvents2)(player1.name, pronouns1, player2.name, pronouns2);
            alivePlayers = alivePlayers.filter(p => p.name !== player2.name);
            return event;
        } else if (eventType === 'eliminatory3') {
            if (playersCount < 3) return null;
            const [player1, player2, player3] = getRandomPlayers(alivePlayers, 3);
            const pronouns1 = getPronouns(player1);
            const pronouns2 = getPronouns(player2);
            const pronouns3 = getPronouns(player3);
            const event = getRandomElement(eliminatoryEvents3)(player1.name, pronouns1, player2.name, pronouns2, player3.name, pronouns3);
            alivePlayers = alivePlayers.filter(p => p.name !== player1.name);
            return event;
        } else if (eventType === 'standard1') {
            if (playersCount === 0) return null;
            const [player] = getRandomPlayers(alivePlayers, 1);
            const pronouns = getPronouns(player);
            return getRandomElement(standardEvents1)(player.name, pronouns);
        } else if (eventType === 'standard2') {
            if (playersCount < 2) return null;
            const [player1, player2] = getRandomPlayers(alivePlayers, 2);
            const pronouns1 = getPronouns(player1);
            const pronouns2 = getPronouns(player2);
            return getRandomElement(standardEvents2)(player1.name, pronouns1, player2.name, pronouns2);
        } else if (eventType === 'standard3') {
            if (playersCount < 3) return null;
            const [player1, player2, player3] = getRandomPlayers(alivePlayers, 3);
            const pronouns1 = getPronouns(player1);
            const pronouns2 = getPronouns(player2);
            const pronouns3 = getPronouns(player3);
            return getRandomElement(standardEvents3)(player1.name, pronouns1, player2.name, pronouns2, player3.name, pronouns3);
        } else if (eventType === 'standard4') {
            if (playersCount < 4) return null;
            const [player1, player2, player3, player4] = getRandomPlayers(alivePlayers, 4);
            const pronouns1 = getPronouns(player1);
            const pronouns2 = getPronouns(player2);
            const pronouns3 = getPronouns(player3);
            const pronouns4 = getPronouns(player4);
            return getRandomElement(standardEvents4)(player1.name, pronouns1, player2.name, pronouns2, player3.name, pronouns3, player4.name, pronouns4);
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
                        if (alivePlayers.some(p => p.name === name)) {
                            involvedPlayers.add(name);
                        }
                    });
                }
            }
        });

        // Add missing players if necessary
        if (involvedPlayers.size < alivePlayers.length) {
            const missingPlayers = alivePlayers.filter(p => !involvedPlayers.has(p.name));
            missingPlayers.forEach(player => {
                const pronouns = getPronouns(player);
                const standardEvent = getRandomElement(standardEvents1)(player.name, pronouns);
                roundEvents.push(standardEvent);
                involvedPlayers.add(player.name);
            });
        }

        // Shuffle events to randomize order
        roundEvents = roundEvents.sort(() => 0.5 - Math.random());

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
            resultsDiv.innerHTML += `<h2>Vencedor: ${winner.name}</h2>`;
            nextRoundButton.disabled = true;
        } else if (round >= 5 && alivePlayers.length <= 1) {
            resultsDiv.innerHTML += `<h2>Não há vencedores. O jogo terminou!</h2>`;
            nextRoundButton.disabled = true;
        } else {
            updateButtons();
        }
    }

    function startSimulation() {
        players = [];
        playerInputs.forEach((input, index) => {
            const playerName = input.value.trim();
            const playerGender = genderInputs[index].value;
            if (playerName) {
                players.push({ name: playerName, gender: playerGender });
            }
        });
        if (players.length === 10) {
            alivePlayers = [...players];
            resultsDiv.innerHTML = '';
            runRound();
        } else {
            alert("Preencha todos os 10 jogadores antes de iniciar a simulação.");
        }
    }

    function updateButtons() {
        startSimulationButton.disabled = false;
        nextRoundButton.disabled = alivePlayers.length <= 1;
    }

    startSimulationButton.addEventListener('click', startSimulation);
    nextRoundButton.addEventListener('click', runRound);
    resetSimulationButton.addEventListener('click', () => {
        location.reload();
    });

    updateButtons();
});
