// Arrange names in alphabetical order
let names = ["Zara", "Alice", "Michael", "Bob", "Christine"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);


// Check if a given password contains repetitive numbers
function hasRepetitiveNumbers(password) {
    const repetitiveNo = /(\d)\1+/;
    return repetitiveNo.test(password);
}

console.log(hasRepetitiveNumbers("pass123111word")); 
console.log(hasRepetitiveNumbers("secure456password"));


// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 
console.log(reverseString("world")); 




// A function to check if a given string is a pangram in JavaScript
function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerStr = str.toLowerCase();

    for (let char of alphabet) {
        if (!lowerStr.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("Hello, world!")); 