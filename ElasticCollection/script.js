// script.js
document.addEventListener('DOMContentLoaded', function() {
    const bag = document.getElementById('bag');
    const itemsContainer = document.getElementById('items');
    let isOpen = false;

    bag.addEventListener('click', function() {
        // Toggle the state of the bag and items display
        if (!isOpen) {
            
        } else {
            this.style.backgroundImage = 'url("bag.png")'; // Change back to closed bag image
            itemsContainer.classList.add('hidden');
            isOpen = false;
        }
    });

    const itemElements = document.querySelectorAll('.item');
    itemElements.forEach(item => {
        item.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', e.target.id);
        });

        // Prevent the click on items from propagating to the bag
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            document.getElementById('description').textContent = item.getAttribute('data-description');
        });
    });

    itemsContainer.addEventListener('dragover', function(e) {
        e.preventDefault();  // Necessary to allow dropping
    });

    itemsContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(data);
        const dropRect = itemsContainer.getBoundingClientRect();
        const x = e.clientX - dropRect.left - draggedElement.offsetWidth / 2;
        const y = e.clientY - dropRect.top - draggedElement.offsetHeight / 2;
        draggedElement.style.left = `${x}px`;
        draggedElement.style.top = `${y}px`;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const bag = document.getElementById('bag');

    bag.addEventListener('click', function() {
        // Opens the new page with the items grid
        window.location.href = 'items.html';
    });
});
