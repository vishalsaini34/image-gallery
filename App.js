const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        const img = document.createElement('img');
        img.src = image.src;
        overlay.appendChild(img);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
