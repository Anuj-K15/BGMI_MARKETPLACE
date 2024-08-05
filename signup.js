document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("#register-form");
    const loginForm = document.querySelector("#login-form");
    const showRegisterLink = document.querySelector("#show-register");
    const showLoginLink = document.querySelector("#show-login");

    // Switch to Register form
    if (showRegisterLink) {
        showRegisterLink.addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        });
    }

    // Switch to Login form
    if (showLoginLink) {
        showLoginLink.addEventListener("click", (e) => {
            e.preventDefault();
            registerForm.style.display = "none";
            loginForm.style.display = "block";
        });
    }

    // Form validation
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            const password = document.querySelector("#register-password").value;
            const confirmPassword = document.querySelector("#register-confirm-password").value;

            if (password !== confirmPassword) {
                e.preventDefault();
                alert("Passwords do not match. Please try again.");
            }
        });
    }
});
