// Image filter (advanced)
const images = document.querySelectorAll('img');

images.forEach((img) => {
    // log information about every button
    img.classList.add('sepia');

    img.addEventListener('click', () => {
        img.addEventListener('click', () => {
            images.forEach((image) => {
                // log information about every button
                image.classList.add('sepia');
            });
            img.classList.remove('sepia');
        });
    });
});
