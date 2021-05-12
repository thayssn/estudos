function Arvore(fruits = []) {
    const arvore = {}
    
    arvore.fruits = fruits;

    arvore.pick = (color) => {
        return arvore.fruits.filter(fruit => fruit === color)
    }

    return arvore;
}

export default Arvore;