const array = [1 , 2 , 3];

function notPureAddElementToArray(element) {
    array.push(element)
}

const array2 = [1 , 2 , 3];

function pureAddElementToArray(arr, element) {
    return [...arr, element]
};

function almostPureAddElementToArray(arr, element) {
    const random = Math.random();
    return [...arr, element, random.toFixed(2)]
};

console.log('almost pure, but random value');
console.log(almostPureAddElementToArray(array2, 3))
console.log(almostPureAddElementToArray(array2, 3))
console.log(almostPureAddElementToArray(array2, 3))

function pureAddElementToArrayWithRandomElement() {
    let random = Math.random()

    return (arr, element) => {
        return [...arr, element, random.toFixed(2)]        
    }
};

const addElementToArrayWithTheSameRandomElement = pureAddElementToArrayWithRandomElement()

console.log('pure, with same random value');
console.log(addElementToArrayWithTheSameRandomElement(array2, 3))
console.log(addElementToArrayWithTheSameRandomElement(array2, 3))
console.log(addElementToArrayWithTheSameRandomElement(array2, 3))