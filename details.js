document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const accountId = urlParams.get("id");

    // Fetch account details using the account ID (from a database or predefined list)
    // Example (assuming you have the details locally for now):
    const accountDetails = getAccountDetailsById(accountId); // Replace with actual data fetching

    if (accountDetails) {
        document.getElementById("account-name").textContent = accountDetails.name;
        document.getElementById("account-details").textContent = accountDetails.details;
        document.getElementById("account-image").src = accountDetails.mainImage;
        // Optionally, add more images or content dynamically
    }
});

function getAccountDetailsById(id) {
    // Placeholder for fetching actual data
    const dummyData = {
        id: '1',
        name: 'PUBG Elite Account',
        details: 'Detailed description of the account, features, etc.',
        mainImage: 'path/to/image.jpg'
    };
    return dummyData; // Replace this with actual data fetching logic
}
