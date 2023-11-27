import moment from 'moment';

// Navigation Option
export const navOptionHandler = () => ({
    headerShown: false
});

// Empty Data
export const isEmpty = (data) => {
    return !data || data == undefined || data == null ||
        (typeof data === 'string' && data == '') ||
        (typeof data === 'array' && data.length == 0);
};

// Return Currency Type
export const isPrice = (amount, currency) => {
    return `${(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: currency
    })}`
};

// Return Less String with ...
export const isShort = (str, length) => {
    return str?.length > length ? `${str.substring(0, length)} ...` : str
};

// Return DateTime 'Sunday, November 26th 1990, 08:29:00 pm'
export const isDate = (date) => {
    return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a');
};

// Return Capitalize String
export const isCapitalize = (str) => {
    // Check if the input is a non-empty string
    if (typeof str !== 'string' || str.length === 0) {
        return str; // Return as is if not a string or an empty string
    }

    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Return Upper String
export const isUpper = (str) => {
    // Check if the input is a non-empty string
    if (typeof str !== 'string' || str.length === 0) {
        return str; // Return as is if not a string or an empty string
    }

    // Upper String
    return str.toUpperCase();
};

// Return Lower String
export const isLower = (str) => {
    // Check if the input is a non-empty string
    if (typeof str !== 'string' || str.length === 0) {
        return str; // Return as is if not a string or an empty string
    }

    // Lower String
    return str.toLowerCase();
};


// Return Validate Email
export const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(String(email.trim()).toLowerCase());
};

// Return Validate Password
export const isPassword = (password) => {
    // Minimum length of 8 characters
    const minLength = 8;

    // Require at least one lowercase letter
    const hasLowerCase = /[a-z]/.test(password);

    // Require at least one uppercase letter
    const hasUpperCase = /[A-Z]/.test(password);

    // Require at least one digit
    const hasDigit = /\d/.test(password);

    // Require at least one special character
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    // Check all conditions
    return (
        password.length >= minLength &&
        hasLowerCase &&
        hasUpperCase &&
        hasDigit &&
        hasSpecialChar
    );
};

// Logger
export const isLog = (type, message) => {
    if (type === 'success') {
        // Success Message
        console.log(`\x1b[32m[SUCCESS]: `, `\x1b[37m${message}`);
    } else if (type === 'error') {
        // Error Message
        console.log(`\x1b[31m[ERROR]: `, `\x1b[37m${message}`);
    } else if (type === 'info') {
        // Info Message
        console.log(`\x1b[33m[INFO]: `, `\x1b[37m${message}`);
    }
};