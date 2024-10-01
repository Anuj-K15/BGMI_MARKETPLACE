// Assuming you're using localStorage for simplicity
document.getElementById('sell-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const gameName = document.getElementById('game-name').value;
    const playerId = document.getElementById('player-id').value;
    const playerLevel = document.getElementById('mythic-skins').value || 0;
    const evoLevel = document.getElementById('legendary-skins').value || 0;
    const achievementPoints = document.getElementById('upgradable-skins').value || 0;
    const price = document.getElementById('price').value;
    const accountDetails = document.getElementById('account-details').value;
    const accountImages = document.getElementById('account-image').files;

    // Prepare account data to save
    const accountData = {
        gameName,
        playerId,
        playerLevel,
        evoLevel,
        achievementPoints,
        price,
        accountDetails,
        images: [] // To store image data URLs
    };

    // Convert images to base64 for simplicity (in a real app, you'd save images on a server)
    for (let i = 0; i < accountImages.length; i++) {
        const reader = new FileReader();
        reader.onload = function (e) {
            accountData.images.push(e.target.result);

            // Store data in localStorage once all images are processed
            if (accountData.images.length === accountImages.length) {
                const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
                accounts.push(accountData);
                localStorage.setItem('accounts', JSON.stringify(accounts));

                alert('Account listed successfully!');
                document.getElementById('sell-form').reset(); // Reset the form
            }
        };
        reader.readAsDataURL(accountImages[i]);
    }
});
