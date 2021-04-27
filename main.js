// Daniel Garcia
// Kargo - Software Engineer Intern
// April 26, 2021

const intToPhonetic = (integer) => {
    switch(integer) {
        case 0:
            return "Zero";
        case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
    }
}

function intArrayToStringArray(intArray) {
    var stringArray = [];
    var phoneticString;
    for (var integer of intArray) {
        phoneticString = "";
        while (integer > 1) {
            var digit = integer % 10;
            integer = Math.floor(integer / 10);
            phoneticString = intToPhonetic(digit) + phoneticString;
        }
        stringArray.push(phoneticString);
    }
    return stringArray;
}

var ex = [3,25,209]
var phoneticStringArray = intArrayToStringArray(ex);

var returnString = phoneticStringArray[0];
for (var i = 1; i < phoneticStringArray.length; i++) {
    returnString += `,${phoneticStringArray[i]}`
}
console.log(returnString);