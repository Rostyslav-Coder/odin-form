// Odin-form script

// Declare and initialize variables
let container = document.querySelector('#container');

let firstNameInput = document.querySelector('#f-name');
let lastNameInput = document.querySelector('#l-name');
let emailInput = document.querySelector('#email');
let phoneNumberInput = document.querySelector('#ph-num');
let passwordInput = document.querySelector('#psw');
let confirmPasswordInput = document.querySelector('#cnf-psw');

let firstNameLabel = document.querySelector('#f-name-lab');
let lastNameLabel = document.querySelector('#l-name-lab');
let emailLabel = document.querySelector('#email-lab');
let phoneNumberLabel = document.querySelector('#ph-num-lab');
let passwordLabel = document.querySelector('#psw-lab');
let confirmPasswordLabel = document.querySelector('#cnf-psw-lab');

firstNameInput.addEventListener('focus', function() {
    container.style.backgroundColor = ('#ffffffdd');
    firstNameLabel.style.position = ('absolute');
    firstNameLabel.style.top = ('-4px');
    firstNameLabel.style.color = ('#03017a');
    firstNameLabel.style.transition = ('0.3s');
});

lastNameInput.addEventListener('focus', function() {
    container.style.backgroundColor = ('#ffffffdd');
    lastNameLabel.style.position = ('absolute');
    lastNameLabel.style.top = ('-4px');
    lastNameLabel.style.color = ('#03017a');
    lastNameLabel.style.transition = ('0.3s');
});

emailInput.addEventListener('focus', function() {
    container.style.backgroundColor = ('#ffffffdd');
    emailLabel.style.position = ('absolute');
    emailLabel.style.top = ('-4px');
    emailLabel.style.color = ('#03017a');
    emailLabel.style.transition = ('0.3s');
});

phoneNumberInput.addEventListener('focus', function() {
    container.style.backgroundColor = ('#ffffffdd');
    phoneNumberLabel.style.position = ('absolute');
    phoneNumberLabel.style.top = ('-4px');
    phoneNumberLabel.style.color = ('#03017a');
    phoneNumberLabel.style.transition = ('0.3s');
});

passwordInput.addEventListener('focus', function() {
    container.style.backgroundColor = ('#ffffffdd');
    passwordLabel.style.position = ('absolute');
    passwordLabel.style.top = ('-4px');
    passwordLabel.style.color = ('#03017a');
    passwordLabel.style.transition = ('0.3s');
});

confirmPasswordInput.addEventListener('focus', function() {
    container.style.backgroundColor = ('#ffffffdd');
    confirmPasswordLabel.style.position = ('absolute');
    confirmPasswordLabel.style.top = ('-4px');
    confirmPasswordLabel.style.color = ('#03017a');
    confirmPasswordLabel.style.transition = ('0.3s');
});
