function contactSeller(game) {
    // Display the modal
    document.getElementById('contact-modal').style.display = 'block';
    
    // Set the game name in the modal
    document.getElementById('modal-game-name').innerText = `You're interested in the account for ${game}.`;
}

// Function to close the modal
function closeModal() {
    document.getElementById('contact-modal').style.display = 'none';
}

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Implement actual form submission logic here

    alert(`Message sent! Thank you, ${name}. We will contact you at ${email}.`);
    
    // Close the modal after form submission
    closeModal();
});
