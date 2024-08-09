document.querySelector('.buy-now-button').addEventListener('click', function() {
    // Show the payment method section
    document.getElementById('paymentMethodContainer').style.display = 'block';

    // Optionally, you can scroll to the payment method section
    document.getElementById('paymentMethodContainer').scrollIntoView({ behavior: 'smooth' });
});
