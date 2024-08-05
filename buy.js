// Sample data for available accounts
const accounts = [
    { id: 1, name: 'Epic Warrior', game: 'Clash of Clans', price: 99, image: 'assets/abc.jpg' },
    { id: 2, name: 'Master Strategist', game: 'Clash Royale', price: 149, image: 'assets/clash-royale.jpg' },
    { id: 3, name: 'Super Survivor', game: 'PUBG Mobile', price: 199, image: 'assets/pubg-mobile.jpg' }
];

const accountsList = document.getElementById('accounts-list');
const suggestionsList = document.getElementById('suggestions-list');

// Load available accounts into the main section
window.onload = function() {
    loadAccounts();
};

function loadAccounts() {
    accountsList.innerHTML = '';
    accounts.forEach(account => {
        const accountItem = document.createElement('div');
        accountItem.classList.add('account-item');
        accountItem.innerHTML = `
            <img src="${account.image}" alt="${account.name}">
            <div class="account-details">
                <h3>${account.name}</h3>
                <p>Game: ${account.game}</p>
                <p>Price: $${account.price}</p>
                <button onclick="showAccountDetails(${account.id})">View Details</button>
            </div>
        `;
        accountsList.appendChild(accountItem);
    });
}

// Order List
let orders = [];

// Function to show account details in a modal
function showAccountDetails(accountId) {
    const account = accounts.find(acc => acc.id === accountId);
    const modal = document.getElementById('accountModal');
    document.getElementById('accountImage').src = account.image;
    document.getElementById('accountName').innerText = account.name;
    document.getElementById('accountGame').innerText = `Game: ${account.game}`;
    document.getElementById('accountPrice').innerText = `Price: $${account.price}`;
    modal.style.display = 'block';

    // Confirm Purchase button action
    document.getElementById('confirmPurchase').onclick = function() {
        addOrder(account);
        modal.style.display = 'none';
        showPaymentModal();
    };
}

// Function to add an order to the orders list
function addOrder(account) {
    orders.push(account);
    updateOrdersList();
}

// Function to update the orders section
function updateOrdersList() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';

    if (orders.length === 0) {
        ordersList.innerHTML = '<p>No orders placed yet.</p>';
    } else {
        orders.forEach(order => {
            const orderItem = document.createElement('div');
            orderItem.classList.add('account-item');
            orderItem.innerHTML = `
                <img src="${order.image}" alt="${order.name}">
                <div class="account-details">
                    <h3>${order.name}</h3>
                    <p>Game: ${order.game}</p>
                    <p>Price: $${order.price}</p>
                </div>
            `;
            ordersList.appendChild(orderItem);
        });
    }
}

// Function to show the payment modal
function showPaymentModal() {
    const paymentModal = document.getElementById('paymentModal');
    paymentModal.style.display = 'block';
}

// Function to close the modal when clicking outside or on the close button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        event.target.closest('.modal').style.display = 'none';
    }
    if (event.target === document.getElementById('accountModal') || event.target === document.getElementById('paymentModal')) {
        event.target.style.display = 'none';
    }
});

// Toggle Orders section visibility when Orders button is clicked
document.getElementById('orders-button').onclick = function() {
    const ordersSection = document.getElementById('orders');
    if (ordersSection.style.display === 'block') {
        ordersSection.style.display = 'none';
    } else {
        updateOrdersList(); // Update orders list before showing
        ordersSection.style.display = 'block';
    }
};

// Search functionality with suggestions
document.getElementById('search-input').addEventListener('input', function(event) {
    const searchQuery = event.target.value.toLowerCase();
    suggestionsList.innerHTML = '';
    const filteredAccounts = accounts.filter(account => account.name.toLowerCase().includes(searchQuery));

    filteredAccounts.forEach(account => {
        const suggestionItem = document.createElement('li');
        suggestionItem.innerText = account.name;
        suggestionItem.onclick = function() {
            document.getElementById('search-input').value = account.name;
            suggestionsList.innerHTML = '';
            showAccountDetails(account.id);
        };
        suggestionsList.appendChild(suggestionItem);
    });
});
