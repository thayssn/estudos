const { expect } = require('@jest/globals');
const { notPureAddElementToArray,
    pureAddElementToArray,
    almostPureAddElementToArrayWithRandomElement,
    pureAddElementToArrayWithRandomElement } = require('./index');


test('prove that notPureAddElementToArray is not a pure function ', () => {
    const array = [ 1 , 2 , 3];

    notPureAddElementToArray(array, 4)
    expect(array).toEqual([1, 2, 3, 4])

    // same input, different return
    notPureAddElementToArray(array, 4)
    expect(array).toEqual([1, 2, 3, 4, 4])

    // side effect: it changes the variable and all the next calls will use the modified array
    expect(array).toEqual([1, 2, 3, 4, 4])
   
    const newArray = notPureAddElementToArray(array, 5);
    const newArray2 = notPureAddElementToArray(array, 5);

    //side effect: both variables now are the same, because they have the same reference
    expect(newArray).toEqual(newArray2)

    // array doesn't have the same values anymore
    expect(array).not.toEqual([1, 2, 3])
})

test('prove that pureAddElementToArray is a pure function ', () => {
    const array = [ 1 , 2 , 3];

    expect(pureAddElementToArray(array, 4)).toEqual([1, 2, 3, 4])
    // same input, same return
    expect(pureAddElementToArray(array, 4)).toEqual([1, 2, 3, 4])

    // does not cause side effects because it does'nt change the variable
    expect(pureAddElementToArray(array, 5)).toEqual([1, 2, 3, 5])


    const newArray = pureAddElementToArray(array, 5);
    const newArray2 = pureAddElementToArray(array, 5);

    // does not cause side effects because each time it returns a new array
    expect(newArray).toEqual(newArray2)

    // array still have the same values
    expect(array).toEqual([1, 2, 3])
})

test('prove that almostPureAddElementToArrayWithRandomElement is not yet a pure function', () => {
    const array = [ 1 , 2 , 3];

    const randomArray = almostPureAddElementToArrayWithRandomElement(array, 4);
    const randomArray2 = almostPureAddElementToArrayWithRandomElement(array, 4);

    // does not return the same array with the same result
    expect(randomArray).not.toEqual(randomArray2)

    // array still have the same values
    expect(array).toEqual([1, 2, 3])
})

test('prove that pureAddElementToArrayWithRandomElement is a pure function', () => {
    const array = [ 1 , 2 , 3];
   
    
   const getRandomArray = pureAddElementToArrayWithRandomElement();

    expect(getRandomArray(array, 4)).toEqual(getRandomArray(array, 4))

    // array still have the same values
    expect(array).toEqual([1, 2, 3])
})