// Odin-form script

// Declare and initialize color variables
const WHITE = '#fff';
const LIGHT = '#ddd';
const DARK = '#555';
const BLUE = '#2c4cdb';
const RED = '#f93a3a';

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

// Validate functions
let validateFirstName = (value) => {
    value = value.trim();
    return /^[a-zA-z\s]*$/.test(value); 
};

let validateLastName = (value) => {
    value = value.trim();
    return /^[a-zA-z\s]*$/.test(value);
};

let validateEmail = (value) => {
    value = value.trim();
    return /^\S+@\S+.\S+$/.test(value);
};

let validatePhoneNumber = (value) => {
    value = value.trim();
    return /^\+\d{2}\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/.test(value);
};

let validatePassword = (value) => {
    value = value.trim();
    return value.length >= 8;
};

let validateConfirmPassword = (value) => {
    value = value.trim();
    return value === passwordInput.value.trim();
};

const INPUTS_LIST = [
    {input: firstNameInput, label: firstNameLabel, validate: validateFirstName},
    {input: lastNameInput, label: lastNameLabel, validate: validateLastName},
    {input: emailInput, label: emailLabel, validate: validateEmail},
    {input: phoneNumberInput, label: phoneNumberLabel, validate: validatePhoneNumber},
    {input: passwordInput, label: passwordLabel, validate: validatePassword},
    {input: confirmPasswordInput, label: confirmPasswordLabel, validate: validateConfirmPassword}
];


// function
INPUTS_LIST.forEach(({input, label, validate}) => {
    input.addEventListener('focus', function() {
        fokus(input, label);
    });

    input.addEventListener('blur', function() {
        if ( input.value.trim() === '') {
            unfocus(input, label);
        } else {
            let isValid = validate(input.value.trim());
            if ( isValid ) {
                validInput(input, label);
            } else {
                invalidInput(input, label);
            }
        }
    });
});

const fokus = (input, label) => {
    console.log(label);
    input.style.boxShadow = '0 0 8px 1px' + BLUE;
    input.style.border = '2px solid' + BLUE;
    label.style.top = '-4px';
    label.style.color = BLUE;
    label.style.transition = '0.3s';
    console.log(label);
};

const unfocus = (input ,label) => {
    input.style.boxShadow = '';
    input.style.border = '2px solid' + DARK;
    label.style.top = '';
    label.style.color = '';
};

const validInput = (input, label) => {
    // input.style.backgroundColor = WHITE;
    input.style.borderColor = WHITE;
    input.style.boxShadow = '0 0 8px 1px' + BLUE;
    label.style.color = BLUE;
};

const invalidInput = (input, label) => {
    // input.style.backgroundColor = RED;
    input.style.borderColor = WHITE;
    input.style.boxShadow = '0 0 8px 1px' + RED;
    label.style.color = RED;
};
