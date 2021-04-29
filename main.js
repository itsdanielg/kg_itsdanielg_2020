// Daniel Garcia
// Kargo - Software Engineer Intern
// April 26, 2021

// Converts given integer into its phonetic string
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
        default:
            return "";
    }
}

// Converts all integers in an array into its string array
function intArrayToStringArray(intArray) {
    var stringArray = [];
    var phoneticString;
    for (var integer of intArray) {
        phoneticString = "";
        while (integer >= 1) {
            var digit = integer % 10;
            integer = Math.floor(integer / 10);
            phoneticString = intToPhonetic(digit) + phoneticString;
        }
        stringArray.push(phoneticString);
    }
    return stringArray;
}

function main(argv) {
    // stdin to int array
    var intArray = [];
    for (var i = 0; i < argv.length; i++) {
        var integer = parseInt(argv[i]);
        if (isNaN(integer)) continue;
        intArray.push(integer);
    }
    // Convert int array to phonetic string array
    var phoneticStringArray = intArrayToStringArray(intArray);
    // Concatenate string array into one string
    if (phoneticStringArray.length == 0) return;
    var returnString = phoneticStringArray[0];
    for (var i = 1; i < phoneticStringArray.length; i++) {
        returnString += `,${phoneticStringArray[i]}`
    }
    // Print string to stdout
    console.log(returnString);
}

main(process.argv.slice(2));