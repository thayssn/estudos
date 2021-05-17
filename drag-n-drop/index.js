const containers = document.querySelectorAll('.container');
const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })


    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
});

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        // by default, dropping inside an element is forbidden
        e.preventDefault();
        const afterElement = getDraggableAfterElement(container, e.clientY);
        const draggable = document.querySelector('.dragging');

        if(!afterElement)
            container.append(draggable);

        container.insertBefore(draggable, afterElement);
    })
})

function getDraggableAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll(`.draggable:not(.dragging)`)];

    return draggableElements.reduce((closest, element) => {
        const box = element.getBoundingClientRect();

        const offset = y - box.top - box.height / 2;

        if(offset < 0 && offset > closest.offset )
            return { offset, element: element}

        return closest;
    }, {offset: Number.NEGATIVE_INFINITY}).element
}