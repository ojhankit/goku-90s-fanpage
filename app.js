function showGif() {
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.classList.toggle("hidden");
}

function showImage(form) {
    const image = document.querySelector('.image');
    const images = {
        'goku_ssj': './goku-ssj1.webp',
        'goku_ssj3': './goku-ssj3.webp',
        'goku_ssj_blue': './goku-ssjblue.jpg',
        'goku_ssj_god': './goku-ssjgod.jpg'
    };
    image.style.backgroundImage = `url('${images[form]}')`;
}
