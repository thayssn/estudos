// get element by id

// old ways
// const grandpa = document.getElementById('grandparent');
// const parents = document.getElementsByClassName('parent');

// pass a CSS selector
const grandpa = document.querySelector('#grandparent');

// querySelector gets only the first match
// const parents = grandpa.children;
// const parentOne = parents[0];
// const children = parentOne.children;
const parents = document.querySelectorAll('.parent');

const children = grandparent.querySelectorAll('.child');

//  changeColor(grandpa);

//  changeColor(parentOne)

// Array.from(parents).forEach(changeColor)

// Array.from(children).forEach(changeColor)

// From bottom to top

const childOne = document.querySelector('#childOne')
const childOneParent = childOne.parentElement;
// changeColor(childOneParent)

// const childOneGrandpa = childOneParent.parentElement;
// skips parent
const childOneGrandpa = childOne.closest('.grandparent');

changeColor(childOneGrandpa)

const childOneBrother = childOne.nextElementSibling;

changeColor(childOneBrother)

changeColor(childOneBrother.previousElementSibling)


function changeColor(element){
    element.style.backgroundColor = '#345';
}