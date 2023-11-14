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

// Declare and initialize color variables
const WHITE_WITH_OPACITY = '#eeeeee1e';
const WHITE = '#ffffffdd';
const GREY_WITH_OPACITY = '#12121299';
const GREY = '#333';
const BLUE_LIGHT = '#2c4cdb';
const BLUE = '#03017a';

const LABEL_LIST = [
    firstNameLabel,
    lastNameLabel,
    emailLabel,
    phoneNumberLabel,
    passwordLabel,
    confirmPasswordLabel
]

container.addEventListener('mouseenter', function() {
    container.style.backgroundColor = (WHITE);

    for ( let i = 0; i < LABEL_LIST.length; i++ ) {
        LABEL_LIST[i].style.color = (BLUE_LIGHT);
        LABEL_LIST[i].style.transition = ('0.3s');
    };
});

container.addEventListener('mouseleave', function() {
    container.style.backgroundColor = (WHITE_WITH_OPACITY);

    for ( let i = 0; i < LABEL_LIST.length; i++ ) {
        LABEL_LIST[i].style.color = (GREY_WITH_OPACITY);
        LABEL_LIST[i].style.transition = ('0.3s');
    };
});

firstNameInput.addEventListener('focus', function() {
    firstNameLabel.style.position = ('absolute');
    firstNameLabel.style.top = ('-4px');
    firstNameLabel.style.color = (BLUE);
    firstNameLabel.style.transition = ('0.3s');
});

lastNameInput.addEventListener('focus', function() {
    container.style.backgroundColor = (WHITE);
    lastNameLabel.style.position = ('absolute');
    lastNameLabel.style.top = ('-4px');
    lastNameLabel.style.color = (BLUE);
    lastNameLabel.style.transition = ('0.3s');
});

emailInput.addEventListener('focus', function() {
    container.style.backgroundColor = (WHITE);
    emailLabel.style.position = ('absolute');
    emailLabel.style.top = ('-4px');
    emailLabel.style.color = (BLUE);
    emailLabel.style.transition = ('0.3s');
});

phoneNumberInput.addEventListener('focus', function() {
    container.style.backgroundColor = (WHITE);
    phoneNumberLabel.style.position = ('absolute');
    phoneNumberLabel.style.top = ('-4px');
    phoneNumberLabel.style.color = (BLUE);
    phoneNumberLabel.style.transition = ('0.3s');
});

passwordInput.addEventListener('focus', function() {
    container.style.backgroundColor = (WHITE);
    passwordLabel.style.position = ('absolute');
    passwordLabel.style.top = ('-4px');
    passwordLabel.style.color = (BLUE);
    passwordLabel.style.transition = ('0.3s');
});

confirmPasswordInput.addEventListener('focus', function() {
    container.style.backgroundColor = (WHITE);
    confirmPasswordLabel.style.position = ('absolute');
    confirmPasswordLabel.style.top = ('-4px');
    confirmPasswordLabel.style.color = (BLUE);
    confirmPasswordLabel.style.transition = ('0.3s');
});
