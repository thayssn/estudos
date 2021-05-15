const regularSection = document.querySelector('.regular');

const vovo = regularSection.querySelector('.vovo');
const pai = regularSection.querySelector('.pai');
const neto = regularSection.querySelector('.neto');

const propagationSection = document.querySelector('.propagation');

const propagationPeople = propagationSection.querySelectorAll('div');

const delegationSection = document.querySelector('.delegation');

const delegationPeople = delegationSection.querySelectorAll('div');
const delegationPai = delegationSection.querySelector('.pai');

let clearLogsInterval = setInterval(() => {
    console.clear();
}, 3000)

// Bubbling

//should log 👴
vovo.addEventListener('click', () => {
    console.log('Bubbling 👴');
})

//should log 👨 then 👴
pai.addEventListener('click', () => {
    console.log('Bubbling 👨');
})

//should log 🧒 then 👨 then 👴
neto.addEventListener('click', () => {
    console.log('Bubbling 🧒');
})


// Capturing

//should log 👴
vovo.addEventListener('click', () => {
    console.log('Capturing 👴');
}, { capture: true})

//should log 👴 then 👨
pai.addEventListener('click', () => {
    console.log('Capturing 👨');
}, { capture: true})

//should log 👴 then 👨 then 🧒
neto.addEventListener('click', () => {
    console.log('Capturing 🧒');
}, { capture: true})


// should ignore click events for new 👶 added later
// can be solved with < Delegation >
const newBaby = document.createElement('div');
newBaby.className = "neto";
pai.append(newBaby)

// Listening Once

// should log only once and never again.
document.addEventListener('click', () => {
    console.log(`I won't show again`);
}, { once: true})

// Stop Propagation

// will not trigger bubbling or capturing behavior
propagationPeople.forEach(person => {
    person.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log(`Eu sou um`, e.currentTarget.className)
    })
})

// Delegation

// should work with all 👶 added later
delegationSection.addEventListener('click', (e) => {
    if(e.target.matches('div')){
        console.log(e.target.className)
    }
}) 

const delegationNewBaby = document.createElement('div');
delegationNewBaby.className = "neto dois";
delegationPai.append(delegationNewBaby)
