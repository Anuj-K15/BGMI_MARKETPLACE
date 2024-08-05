document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    setTimeout(() => {
        heroTitle.classList.add('visible');
    }, 100); // Delay to allow CSS transition to be applied

    const input = document.getElementById('search-input');
    const suggestionsList = document.getElementById('suggestions-list');

    const accounts = [ // Example account names
        'ApexAssassin',
        'BattleBoss',
        'CosmicChampion',
        // Add more accounts here
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

    // Sidebar toggle functionality
    const sidebar = document.querySelector('.social-media-sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');

    toggleButton.addEventListener('click', () => {
        if (sidebar.style.transform === 'translateX(0px)') {
            sidebar.style.transform = 'translateX(-300px)';
        } else {
            sidebar.style.transform = 'translateX(0px)';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.premium-sidebar');

    toggleButton.addEventListener('click', () => {
        if (sidebar.style.left === '10px') {
            sidebar.style.left = '-250px'; // Hide sidebar
        } else {
            sidebar.style.left = '48px'; // Show sidebar
        }
    });
});