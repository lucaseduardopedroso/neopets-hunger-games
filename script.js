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

    function createEvent(eventType) {
        const playersCount = alivePlayers.length;

        if (eventType === 'eliminatory1') {
            if (playersCount === 0) return null;
            const [player] = getRandomPlayers(alivePlayers, 1);
            const event = getRandomElement(eliminatoryEvents1)(player);
            alivePlayers = alivePlayers.filter(p => p !== player);
            return event;
        } else if (eventType === 'eliminatory2') {
            if (playersCount < 2) return null;
            const [player1, player2] = getRandomPlayers(alivePlayers, 2);
            const event = getRandomElement(eliminatoryEvents2)(player1, player2);
            alivePlayers = alivePlayers.filter(p => p !== player2);
            return event;
        } else if (eventType === 'eliminatory3') {
            if (playersCount < 3) return null;
            const [player1, player2, player3] = getRandomPlayers(alivePlayers, 3);
            const event = getRandomElement(eliminatoryEvents3)(player1, player2, player3);
            alivePlayers = alivePlayers.filter(p => p !== player1);
            return event;
        } else if (eventType === 'standard1') {
            if (playersCount === 0) return null;
            const [player] = getRandomPlayers(alivePlayers, 1);
            return getRandomElement(standardEvents1)(player);
        } else if (eventType === 'standard2') {
            if (playersCount < 2) return null;
            const [player1, player2] = getRandomPlayers(alivePlayers, 2);
            return getRandomElement(standardEvents2)(player1, player2);
        } else if (eventType === 'standard3') {
            if (playersCount < 3) return null;
            const [player1, player2, player3] = getRandomPlayers(alivePlayers, 3);
            return getRandomElement(standardEvents3)(player1, player2, player3);
        } else if (eventType === 'standard4') {
            if (playersCount < 4) return null;
            const [player1, player2, player3, player4] = getRandomPlayers(alivePlayers, 4);
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
                const standardEvent = getRandomElement(standardEvents1)(player);
                roundEvents.push(standardEvent);
                involvedPlayers.add(player);
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
