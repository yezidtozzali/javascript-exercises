const sumAll = function(a, b) {
    let sum = 0
    let min = Math.min(a, b)
    let max = Math.max(a, b)


    for (let i = Math.min(a, b); i <= Math.max(a, b); i++){
    
        sum += i;
}
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
