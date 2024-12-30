const images = [
    { src: 'nature1.jpg', category: 'nature' },
    { src: 'nature2.jpg', category: 'nature' },
    { src: 'city1.jpg', category: 'city' },
    { src: 'city2.jpg', category: 'city' },
    { src: 'animal1.jpg', category: 'animals' },
    { src: 'animal2.jpg', category: 'animals' }
];

const gallery = document.getElementById('gallery');
const filters = document.querySelectorAll('.filters button');

function displayImages(filter = 'all') {
    gallery.innerHTML = '';
    
    const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);
    
    filteredImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.category;
        gallery.appendChild(imgElement);
    });
}

filters.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        displayImages(filter);
    });
});

displayImages();
