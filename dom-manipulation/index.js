const section = document.querySelector('section')
const code = document.querySelector('code');

code.append(section.outerHTML)

/* ----------------------------
     Creating elements
---------------------------- */
const element = document.createElement('div');

/* ----------------------------
    Appending elements
---------------------------- */

// We can append string or Nodes and can append more than one at a time.
section.append('Append string or Node', element)

// Only appends nodes and only one at a time.
section.appendChild(element);

/* ----------------------------
    Modifying element text
---------------------------- */

element.innerText = `Hi, I'm  a div`
element.textContent = `Hi, there!`

const div = document.querySelector('div');

// Prints the exact content, including spaces and identation and etc.
console.log(div.textContent);

// Prints only the visible text displaying on the page,
// without extra spaces and identation, just like it behaves in the page.
console.log(div.innerText);


/* ----------------------------
    Modifying element HTML
---------------------------- */

// ! vulnerable for xss attacks
element.innerHTML= `<p>I'm a paragraph</p>`;

// more secure way of doing the same;
const paragraph = document.createElement('p');
paragraph.innerText = `I'm a secure paragraph`;

element.append(paragraph)

/* ----------------------------
    Modifying element attributes
---------------------------- */

const anchor = document.querySelector('a');

console.log(anchor.getAttribute('href'));

// usually it's already available directly from the element
console.log(anchor.href)

anchor.setAttribute('id', "anchor");

anchor.id = "anchor";

anchor.removeAttribute("style");

console.log(anchor.hasAttribute('style'))

anchor.toggleAttribute('contenteditable')

// NamedNodeMap
console.log(anchor.attributes)

console.log(anchor.getAttributeNode('id'))


/* --------------------------------------
    Modifying element data attributes   |
-------------------------------------- */

console.log(anchor.dataset)
console.log(anchor.dataset.longTest)

/* ----------------------------
    Modifying element classes
---------------------------- */

console.log(div.classList);

console.log(div.classList.add('class3'));

console.log(div.classList.remove('class2'));

console.log(div.classList.toggle('class4'));

console.log(div.classList.toggle('class1', false));

console.log(div)

/* ----------------------------
    Modifying element styles
---------------------------- */

div.style.backgroundColor = "#DFE";

console.log(div.style);

/* ----------------------------
    Removing elements
---------------------------- */

const removable = document.querySelector('.removable');
const removableSpan = removable.querySelector('span');

// removes from HTML
removable.remove();

// but we can add it back later
section.append(removable)

removable.removeChild(removableSpan)