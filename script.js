const players = [
    { name: 'ayusha', wins: 2, matches: 4 },
    { name: 'dawa', wins: 5, matches: 6 },
    { name: 'rekha', wins: 3, matches: 6 },
    { name: 'sandesh', wins: 2, matches: 7 },
    { name: 'anuskar', wins: 4, matches: 6 },
    { name: 'utsab', wins: 0, matches: 3 }
];

// Calculate and display percentages on page load
function displayPercentages() {
    players.forEach(player => {
        const percentage = ((player.wins / player.matches) * 100).toFixed(2);
        const percentElement = document.getElementById(`${player.name}-percent`);
        percentElement.textContent = `${percentage}%`;
    });
}

// Update leaderboard with top 3 players
function updateLeaderboard() {
    // Calculate percentages and sort players
    const rankedPlayers = players.map(player => ({
        ...player,
        percentage: ((player.wins / player.matches) * 100).toFixed(2)
    })).sort((a, b) => b.percentage - a.percentage);

    // Display top 3
    for (let i = 0; i < 3 && i < rankedPlayers.length; i++) {
        const rank = i + 1;
        const player = rankedPlayers[i];
        document.getElementById(`rank${rank}-name`).textContent = player.name.toUpperCase();
        document.getElementById(`rank${rank}-percent`).textContent = `${player.percentage}%`;
        
        // Update profile photo
        const photoElement = document.getElementById(`rank${rank}-photo`);
        photoElement.src = `assets/players/${player.name}.jpg`;
        photoElement.onerror = function() {
            this.src = 'assets/default.svg';
            this.onerror = null;
        };
    }
}

// Calculate percentages and update leaderboard when page loads
displayPercentages();
updateLeaderboard();
