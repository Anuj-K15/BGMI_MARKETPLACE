document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    setTimeout(() => {
        heroTitle.classList.add('visible');
    }, 100); // Delay to allow CSS transition to be applied
});
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    const suggestionsList = document.getElementById('suggestions-list');

    const accounts = [ // Example account names
        'ApexAssassin',
        'BattleBoss',
        'CosmicChampion',
        'DarkDefender',
        'EpicEnigma',
        'FireFury',
        'GhostGamer',
        'HeroicHacker',
        'InvincibleImmortal',
        'JungleJester',
        'KingKiller',
        'LegendaryLancer',
        'MysticMage',
        'NinjaNexus',
        'OverlordOne',
        'PhantomPioneer',
        'QuantumQuester',
        'RogueRanger',
        'StealthStriker',
        'TitanTamer',
        'UltimateUnderdog',
        'VortexVanguard',
        'WarriorWraith',
        'XenonXplorer',
        'YetiYar',
        'ZephyrZenith'
    ];

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase();
        suggestionsList.innerHTML = ''; // Clear previous suggestions

        if (query) {
            const filteredAccounts = accounts.filter(account => account.toLowerCase().includes(query));

            filteredAccounts.forEach(account => {
                const li = document.createElement('li');
                li.textContent = account;
                li.addEventListener('click', () => {
                    input.value = account; // Set input value to selected suggestion
                    suggestionsList.innerHTML = ''; // Clear suggestions
                });
                suggestionsList.appendChild(li);
            });

            suggestionsList.classList.add('show'); // Show suggestions
        } else {
            suggestionsList.classList.remove('show'); // Hide suggestions if input is empty
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (event) => {
        if (!input.contains(event.target) && !suggestionsList.contains(event.target)) {
            suggestionsList.classList.remove('show');
        }
    });
});