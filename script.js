function generatePassword() {
    const length = document.getElementById('length').value;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSpecial = document.getElementById('special').checked;

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let characters = '';
    if (useUppercase) characters += uppercaseLetters;
    if (useLowercase) characters += lowercaseLetters;
    if (useNumbers) characters += numbers;
    if (useSpecial) characters += specialCharacters;

    if (characters.length === 0) {
        alert("Please select at least one character type.");
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('passwordOutput').textContent = password;
}

function copyPassword() {
    const passwordText = document.getElementById('passwordOutput').textContent;
    if (passwordText === "") {
        alert("No password to copy!");
        return;
    }
    navigator.clipboard.writeText(passwordText).then(() => {
        alert("Password copied to clipboard!");
    }).catch(err => {
        alert("Error copying password: " + err);
    });
}
