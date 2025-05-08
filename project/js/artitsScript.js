let slider = document.getElementById('slider');

let imgArr = [
    "../img/artitsts/logos/AviciiLogoWhite.png",
    "../img/artitsts/logos/MarshmelloLogoWhite.png",
    "../img/artitsts/logos/MartinGarrixLogoWhite.png"
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