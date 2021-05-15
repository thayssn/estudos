const cloneArray = require('./cloneArray');

test('properly clones array', () => {
    const array = [1, 2, 3]
    
    /* does not pass

    // expects it to have the same reference, but are two different arrays
    expect(cloneArray(array)).toEqual(array)

    */

    // expects it to have the same value, but not to be the same reference
    expect(cloneArray(array)).toEqual(array)

    // expects it not to be the same reference
    expect(cloneArray(array)).not.toBe(array)
})