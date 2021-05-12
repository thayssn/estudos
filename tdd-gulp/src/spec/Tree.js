const Tree = require('../js/Tree');

describe('Tree', () => {
    const fruits = ['green', 'yellow', 'red', 'red', 'green', 'yellow']
    const tree = new Tree(fruits)

    it('should return the given the fruits quantity', () => {
        expect(tree.fruits.length).toBe(fruits.length);
    })

    it('should not error when no fruit is passed', () => {
        const tree = new Tree()
        expect(tree.fruits.length).toBe(0);
    })

    it('should return green fruits quantity', () => {
        expect(tree.pick('green').length).toBe(2)
    })

    it('should return all green fruits', () => {
        expect(tree.pick('green')).toEqual(['green', 'green'])
    })

    it('should return red fruits quantity', () => {
        expect(tree.pick('red').length).toBe(2)
    })

    it('should return all red fruits', () => {
        expect(tree.pick('red')).toEqual(['red', 'red'])
    })

    it('should return yellow fruits quantity', () => {
        expect(tree.pick('yellow').length).toBe(2)
    })

    it('should return all yellow fruits', () => {
        expect(tree.pick('yellow')).toEqual(['yellow', 'yellow'])
    })

    



})