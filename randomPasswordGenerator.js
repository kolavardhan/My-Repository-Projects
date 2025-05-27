function randomPassword(passwordLength, isLowerCaseAllowed, isUpperCaseAllowed, isSymbolsAllowed, isNumbersAllowed) {
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "`~!@#$%^&':,";
    const numbers = "0123456789";

    let allowedChar = "";
    let password = "";

    allowedChar += isLowerCaseAllowed ? lowerCaseChar : "";
    allowedChar += isUpperCaseAllowed ? upperCaseChar : "";
    allowedChar += isSymbolsAllowed ? symbols : "";
    allowedChar += isNumbersAllowed ? numbers : "";
    
    for (let i = 0 ; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex];
    }

    return password;
}

const passwordLength = 12;
const isLowerCaseAllowed = true;
const isUpperCaseAllowed = true;
const isSymbolsAllowed = true;
const isNumbersAllowed = true;

let userPassword =  randomPassword(passwordLength, isLowerCaseAllowed, isUpperCaseAllowed, isSymbolsAllowed, isNumbersAllowed);
console.log(userPassword);