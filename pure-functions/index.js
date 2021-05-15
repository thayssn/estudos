const array = [1 , 2 , 3];

function notAtAllPureAddElementToArray(element) {
    array.push(element)
}

function notPureAddElementToArray(arr, element) {
    arr.push(element)
    return arr;
}

function pureAddElementToArray(arr, element) {
    return [...arr, element]
};

function almostPureAddElementToArrayWithRandomElement(arr, element) {
    const random = Math.random();
    return [...arr, element, random.toFixed(5)]
};

function pureAddElementToArrayWithRandomElement() {
    let random = Math.random()

    return (arr, element) => {
        return [...arr, element, random.toFixed(2)]        
    }
};

module.exports = {
    notPureAddElementToArray,
    pureAddElementToArray,
    almostPureAddElementToArrayWithRandomElement,
    pureAddElementToArrayWithRandomElement
}