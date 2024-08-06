document.getElementById('show-register').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.querySelector('#login-form form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log('User logged in:', userCredential.user);
        alert('Login successful');
        // Redirect or show a success message
        window.location.href = 'homepage.html'; // Redirect to homepage after login
    } catch (error) {
        console.error('Error logging in:', error.message);
        alert('Error logging in: ' + error.message);
    }
});

document.querySelector('#register-form form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log('User registered:', userCredential.user);
        // Store additional user information in Firestore
        await db.collection('users').doc(userCredential.user.uid).set({
            email: email
        });
        alert('Registration successful');
        // Redirect or show a success message
        window.location.href = 'homepage.html'; // Redirect to homepage after registration
    } catch (error) {
        console.error('Error registering:', error.message);
        alert('Error registering: ' + error.message);
    }
});
