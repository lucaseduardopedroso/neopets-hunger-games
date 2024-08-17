function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomPlayers(alivePlayers, num) {
    let shuffled = alivePlayers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
