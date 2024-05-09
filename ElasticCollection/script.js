document.addEventListener('DOMContentLoaded', function () {
    const itemsGrid = document.getElementById('itemsGrid');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');

    closeButton.addEventListener('click', function () {
        modal.classList.remove('visible');
    });

    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const div = document.createElement('div');
                div.className = 'item';
                div.innerHTML = `<img src="${item.image}" alt="${item.name}" style="width: 100%;">
                                 <p>${item.name}</p>`;
                div.addEventListener('click', () => {
                    modalImg.src = item.image;
                    modalImg.alt = item.name;
                    modalDesc.textContent = `${item.description}`;
                    modal.classList.add('visible');
                });
                itemsGrid.appendChild(div);
            });
        })
        .catch(error => console.error('Failed to load items:', error));
});
