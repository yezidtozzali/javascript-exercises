const palindromes = function (string) {
    const cleaned = string.replace(/[^a-z0-9]/gi, '');
    const lowerCase = cleaned.toLowerCase();
    const reversed = lowerCase.split("").reverse().join("");

    return lowerCase === reversed;
};

// Do not edit below this line
module.exports = palindromes;
