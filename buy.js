document.addEventListener('DOMContentLoaded', function () {
    const accountsContainer = document.getElementById('accounts-container');
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    if (accounts.length === 0) {
        accountsContainer.innerHTML = '<p>No accounts listed yet.</p>';
    } else {
        accounts.forEach((account, index) => {
            // Create card element
            const card = document.createElement('div');
            card.classList.add('account-card');

            // Minimal information and first image
            card.innerHTML = `
                <img src="${account.images[0]}" alt="${account.gameName}" class="card-image">
                <h3>${account.gameName}</h3>
                <p>Price: $${account.price}</p>
                <button class="view-details-btn" data-index="${index}">View Details</button>
            `;

            // Append card to container
            accountsContainer.appendChild(card);
        });
    }

    // Handle 'View Details' button click
    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", (e) => {
            const accountId = e.target.dataset.accountId; // Retrieve account ID from the button's data attribute
            window.location.href = `details.html?id=${accountId}`;
        });
    });
    
});

// Function to display account details (you can use a modal or a new page for this)
function showAccountDetails(index) {
    const accounts = JSON.parse(localStorage.getItem('accounts'));
    const account = accounts[index];

    // Clear container and show detailed information (or open modal)
    const accountDetailsContainer = document.getElementById('account-details-container');
    accountDetailsContainer.innerHTML = `
        <h2>${account.gameName}</h2>
        <p>Player ID: ${account.playerId}</p>
        <p>Player Level: ${account.playerLevel}</p>
        <p>Evo Level: ${account.evoLevel}</p>
        <p>Achievement Points: ${account.achievementPoints}</p>
        <p>Price: $${account.price}</p>
        <p>Description: ${account.accountDetails}</p>
        <h3>Images:</h3>
        ${account.images.map(img => `<img src="${img}" alt="${account.gameName}" class="detail-image">`).join('')}
    `;

    // Optionally, you can also display the details in a modal for better UX
}
