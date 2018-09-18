const add = (x, y) => (+x) + (+y);
const subtract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);

const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return false;
    }
    return true;
}

function first() {
    return 'hello world'
};

function calcAverage(ages) {
    var sum = 0;
    for (var i = 0; i < ages.length; i++) {
        sum = sum + ages[i];
    }
    return sum / ages.length;
}



module.exports = { add, subtract, multiply, divide, validateNumbers, first, calcAverage }
