// Selecting elements
const switchToRegister = document.querySelector('.switch-to-register');
const switchToLogin = document.querySelectorAll('.switch-to-login');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const loginForm = document.querySelector('.login-box');
const registerForm = document.querySelector('.register-box');
const forgotForm = document.querySelector('.forgot-box');

// Switch to Register Form
switchToRegister.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

// Switch to Login Form
switchToLogin.forEach(button => {
    button.addEventListener('click', () => {
        registerForm.classList.remove('active');
        forgotForm.classList.remove('active');
        loginForm.classList.add('active');
    });
});

// Switch to Forgot Password Form
forgotPasswordLink.addEventListener('click', () => {
    loginForm.classList.remove('active');
    forgotForm.classList.add('active');
});

// Show Login Form on Page Load
window.onload = () => {
    loginForm.classList.add('active');
};
