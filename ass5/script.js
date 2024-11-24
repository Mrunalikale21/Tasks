const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');
const passwordStrengthBar = document.getElementById('password-strength');
const confirmPasswordError = document.getElementById('confirm-password-error');
const submitBtn = document.getElementById('submit-btn');
const passwordRequirements = document.getElementById('password-requirements');

// Regular expressions for validation
const passwordPattern = {
    weak: /.{1,5}/,  // Less than 6 characters
    moderate: /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/, // At least 6 characters, with letters and numbers
    strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/  // At least 8 chars, 1 upper, 1 lower, 1 digit, 1 special char
};

// Update password strength
passwordField.addEventListener('input', () => {
    const password = passwordField.value;
    let strength = 'weak';

    if (passwordPattern.strong.test(password)) {
        strength = 'strong';
    } else if (passwordPattern.moderate.test(password)) {
        strength = 'moderate';
    }

    passwordStrengthBar.className = `strength-indicator ${strength}`;
    if (strength === 'weak') {
        passwordStrengthBar.style.width = '33%';
    } else if (strength === 'moderate') {
        passwordStrengthBar.style.width = '66%';
    } else {
        passwordStrengthBar.style.width = '100%';
    }

    updatePasswordRequirements(password);
    enableSubmitButton(password, confirmPasswordField.value);
});

// Update password requirements dynamically
function updatePasswordRequirements(password) {
    const requirements = passwordRequirements.querySelectorAll('p');
    
    if (password.length >= 8) {
        requirements[0].classList.add('valid');
        requirements[0].classList.remove('invalid');
    } else {
        requirements[0].classList.add('invalid');
        requirements[0].classList.remove('valid');
    }
    if (/[A-Z]/.test(password)) {
        requirements[1].classList.add('valid');
        requirements[1].classList.remove('invalid');
    } else {
        requirements[1].classList.add('invalid');
        requirements[1].classList.remove('valid');
    }
    if (/[a-z]/.test(password)) {
        requirements[2].classList.add('valid');
        requirements[2].classList.remove('invalid');
    } else {
        requirements[2].classList.add('invalid');
        requirements[2].classList.remove('valid');
    }
    if (/\d/.test(password)) {
        requirements[3].classList.add('valid');
        requirements[3].classList.remove('invalid');
    } else {
        requirements[3].classList.add('invalid');
        requirements[3].classList.remove('valid');
    }
    if (/[!@#$%^&*]/.test(password)) {
        requirements[4].classList.add('valid');
        requirements[4].classList.remove('invalid');
    } else {
        requirements[4].classList.add('invalid');
        requirements[4].classList.remove('valid');
    }
}

// Confirm password validation
confirmPasswordField.addEventListener('input', () => {
    if (confirmPasswordField.value !== passwordField.value) {
        confirmPasswordError.textContent = 'Passwords do not match!';
        confirmPasswordError.style.color = 'red';
        enableSubmitButton(passwordField.value, confirmPasswordField.value);
    } else {
        confirmPasswordError.textContent = '';
        enableSubmitButton(passwordField.value, confirmPasswordField.value);
    }
});

// Enable Submit button
function enableSubmitButton(password, confirmPassword) {
    if (passwordPattern.strong.test(password) && password === confirmPassword) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
