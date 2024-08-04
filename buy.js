document.addEventListener('DOMContentLoaded', function () {
    // Sample data for accounts
    const accounts = [
        {
            name: 'Elite Gaming Account',
            game: 'Fortnite',
            price: '$49.99',
            image: 'afkgaming_2023-01_87a9ec24-dcde-4dd3-96fc-e0e68eb5c636_Cover_Image___Most_Searched_BGMI_Players_In_2022.avif'
        },
        {
            name: 'Pro Gamer Account',
            game: 'Apex Legends',
            price: '$59.99',
            image: 'account2.jpg'
        },
        {
            name: 'Pro Gamer Account',
            game: 'Apex Legends',
            price: '$59.99',
            image: 'account2.jpg'
        },
        {
            name: 'Pro Gamer Account',
            game: 'Apex Legends',
            price: '$59.99',
            image: 'account2.jpg'
        },
        {
            name: 'Pro Gamer Account',
            game: 'Apex Legends',
            price: '$59.99',
            image: 'account2.jpg'
        }
    ];

    const accountsList = document.getElementById('accounts-list');
    const accountModal = document.getElementById('accountModal');
    const accountName = document.getElementById('accountName');
    const accountGame = document.getElementById('accountGame');
    const accountPrice = document.getElementById('accountPrice');
    const accountImage = document.getElementById('accountImage');
    const confirmPurchase = document.getElementById('confirmPurchase');
    const paymentModal = document.getElementById('paymentModal');
    const closeButtons = document.querySelectorAll('.close');

    accounts.forEach(account => {
        const accountItem = document.createElement('div');
        accountItem.className = 'account-item';
        accountItem.innerHTML = `
            <img src="${account.image}" alt="${account.name}">
            <div class="account-info">
                <h3>${account.name}</h3>
                <p><strong>Game:</strong> ${account.game}</p>
                <p><strong>Price:</strong> ${account.price}</p>
            </div>
            <button class="contact-button">Buy Now</button>
        `;
        accountItem.addEventListener('click', () => {
            accountName.textContent = account.name;
            accountGame.textContent = `Game: ${account.game}`;
            accountPrice.textContent = `Price: ${account.price}`;
            accountImage.src = account.image;
            accountModal.style.display = 'block';
        });
        accountsList.appendChild(accountItem);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            accountModal.style.display = 'none';
            paymentModal.style.display = 'none';
        });
    });

    confirmPurchase.addEventListener('click', () => {
        accountModal.style.display = 'none';
        paymentModal.style.display = 'block';
    });

    window.addEventListener('click', (event) => {
        if (event.target === accountModal || event.target === paymentModal) {
            accountModal.style.display = 'none';
            paymentModal.style.display = 'none';
        }
    });
});