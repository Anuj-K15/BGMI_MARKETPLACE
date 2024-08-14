// Search Input and Suggestions
const searchInput = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
const imageInput = document.getElementById('account-image');
const imagePreview = document.getElementById('image-preview');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    if (query.length > 0) {
        // Mock search suggestions data
        const suggestions = ['Account1', 'Account2', 'Account3', 'Account4', 'Account5'];
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));

        suggestionsList.innerHTML = '';
        filteredSuggestions.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.addEventListener('click', function() {
                searchInput.value = item;
                suggestionsList.style.display = 'none';
            });
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !suggestionsList.contains(e.target)) {
        suggestionsList.style.display = 'none';
    }
});
/*
// Image Preview
imageInput.addEventListener('change', function() {
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Selected Image">`;
        };
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = '';
    }
});*/

// Handle Form Submission
document.getElementById('sell-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect form data
    const gameName = document.getElementById('game-name').value;
    const accountLevel = document.getElementById('account-level').value;
    const mythicSkins = document.getElementById('mythic-skins').value || 0;
    const legendarySkins = document.getElementById('legendary-skins').value || 0;
    const upgradableSkins = document.getElementById('upgradable-skins').value || 0;
    const accountImage = document.getElementById('account-image').files[0];
    const price = document.getElementById('price').value;

    // Simple validation (can be extended as needed)
    if (!gameName || !accountLevel || !price) {
        alert('Please fill out all required fields.');
        return;
    }

    // Prepare form data for submission (e.g., send to server)
    const formData = new FormData();
    formData.append('game-name', gameName);
    formData.append('account-level', accountLevel);
    formData.append('mythic-skins', mythicSkins);
    formData.append('legendary-skins', legendarySkins);
    formData.append('upgradable-skins', upgradableSkins);
    formData.append('account-image', accountImage);
    formData.append('price', price);

    // Example: Sending data to server (adjust URL as needed)
    fetch('your-server-endpoint-url', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert('Account listed successfully!');
        // Reset form after successful submission
        document.getElementById('sell-form').reset();
        imagePreview.innerHTML = ''; // Clear image preview after submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error listing your account. Please try again.');
    });
});
