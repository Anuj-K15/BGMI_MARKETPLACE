import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClruPNlwlQ-n53bnn00wYPVcEqrY1ZpwE",
    authDomain: "gamer-vault-2024.firebaseapp.com",
    databaseURL: "https://gamer-vault-2024-default-rtdb.firebaseio.com",
    projectId: "gamer-vault-2024",
    storageBucket: "gamer-vault-2024.appspot.com",
    messagingSenderId: "482142111325",
    appId: "1:482142111325:web:b3bd6ce632079f9b82efb4",
    measurementId: "G-RGW7JT3FD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Save the username and email in localStorage
            localStorage.setItem('user', JSON.stringify({ email: userCredential.user.email, username }));

            // Redirect to login page
            window.location.href = 'auth.html';
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
});
