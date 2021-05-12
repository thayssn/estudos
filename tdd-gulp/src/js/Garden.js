import Tree from './Tree';

const fruits = ['green', 'green', 'green']

const tree = new Tree(fruits);

document.querySelector('h1').textContent = tree.pick('green').join(' : ')