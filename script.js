const number = +prompt('Что вы хотите преобразовать в секунды?');
function convertToSeconds(number) {
    return number * 3600
}
console.log(`Число в секундах ${convertToSeconds(number)}.`);



var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLength = +prompt('Какой длины необходимо сгенерировать пароль?');
var password = "";
function generatePassword(passwordLength) {
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password
}
console.log(`Пароль ${generatePassword(passwordLength)}.`);