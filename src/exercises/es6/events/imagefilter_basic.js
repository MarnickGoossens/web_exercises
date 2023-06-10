// Image filter (basic)
const images = document.querySelectorAll('img');

images.forEach(function(img, index) {
    // log information about every button
    img.addEventListener('mouseenter', function(e) {
        img.classList.add('grayscale');
    });

    img.addEventListener('mouseleave', function(e) {
        img.classList.remove('grayscale');
    });
});
