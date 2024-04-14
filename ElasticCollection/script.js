
document.getElementById('bag').addEventListener('click', function() {
    const items = document.getElementById('items');
    if (items.classList.contains('hidden')) {
        items.classList.remove('hidden');
    } else {
        items.classList.add('hidden');
    }
});

const itemElements = document.querySelectorAll('.item');
itemElements.forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('description').textContent = item.getAttribute('data-description');
    });
});
