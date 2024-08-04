document.addEventListener('DOMContentLoaded', function () {
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    const loginForm = document.querySelector('.form-box:first-child');
    const registerForm = document.querySelector('.form-box:last-child');

    showRegisterLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Initially hide the register form
    registerForm.style.display = 'none';
});
