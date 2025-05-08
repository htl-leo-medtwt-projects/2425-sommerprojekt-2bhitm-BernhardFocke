let slider = document.getElementById('slider');

let imgArr = [
    "../img/artists/logos/AviciiLogoWhite.png",
    "../img/artists/logos/MarshmelloLogoWhite.png",
    "../img/artists/logos/MartinGarrixLogoWhite.png"
];

imgSlider();

function imgSlider() {
    for(let i = 0; i < imgArr.length; i++) {
        setAnimation();
        setTimeout(setimg(i), 5000);

        break;
    }
}

function setimg(index) {
    slider.innerHTML = `<img src="${imgArr[index]}" alt="logo${index}">`;
}

function setAnimation() {
    slider.classList.remove('fadeImg');
    slider.offsetHeight;
    slider.classList.add('fadeImg');
}