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
];

const INPUTS_LIST = [
    {input: firstNameInput, label: firstNameLabel},
    {input: lastNameInput, label: lastNameLabel},
    {input: emailInput, label: emailLabel},
    {input: phoneNumberInput, label: phoneNumberLabel},
    {input: passwordInput, label: passwordLabel},
    {input: confirmPasswordInput, label: confirmPasswordLabel}
];

// functions
INPUTS_LIST.forEach(({input, label}) => {
    input.addEventListener('focus', function() {
        container.style.backgroundColor = WHITE;
        label.style.position = 'absolute';
        label.style.top = '-4px';
        label.style.color = BLUE;
        label.style.transition = '0.3s';
    });
});

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
