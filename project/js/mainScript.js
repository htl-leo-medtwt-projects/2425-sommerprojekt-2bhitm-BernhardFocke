//startscreen
let introScreen = document.getElementById('intro');
let navSlider = document.getElementsByClassName('slide');

let page = new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    slidesNavigation: true,
});