// Odin-form script

// Declare and initialize variables
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
const BACKGROUND = '#fff';
const LIGHT = '#ddd';
const DARK = '#555';
const BLUE = '#2c4cdb';
const RED = '#f93a3a';


// Vizualization function
const INPUTS_LIST = [
    {input: firstNameInput, label: firstNameLabel},
    {input: lastNameInput, label: lastNameLabel},
    {input: emailInput, label: emailLabel},
    {input: phoneNumberInput, label: phoneNumberLabel},
    {input: passwordInput, label: passwordLabel},
    {input: confirmPasswordInput, label: confirmPasswordLabel}
];

INPUTS_LIST.forEach(({input, label}) => {
    input.addEventListener('focus', function() {
        label.style.position = 'absolute';
        label.style.top = '-4px';
        label.style.color = BLUE;
        label.style.transition = '0.3s';
    });

    input.addEventListener('blur', function() {
        label.style.position = '';
        label.style.top = '';
        label.style.color = '';
    });
});


// Validate functions
firstNameInput.addEventListener('keydown', function() {
    const value = firstNameInput.value.trim();
    if ( !/^[a-zA-z\s]*$/.test(value)) {
        invalidFirstName();
    } else {
        validFirstName();
    }
});

const validFirstName = () => {
    firstNameInput.style.borderColor = BACKGROUND;
    firstNameInput.style.boxShadow = '0 0 8px 1px BLUE';
    firstNameLabel.innerText = 'First Name';
    firstNameLabel.style.color = BLUE;
};

const invalidFirstName = () => {
    firstNameInput.style.backgroundColor = RED;
    firstNameInput.style.borderColor = BACKGROUND;
    firstNameInput.style.boxShadow = '0 0 8px 1px RED';
    firstNameLabel.innerText = 'Use only letters';
    firstNameLabel.style.color = RED;
};
