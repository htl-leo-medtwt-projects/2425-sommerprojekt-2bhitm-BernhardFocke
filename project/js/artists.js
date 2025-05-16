let slider = document.getElementById('slider');
let artistBox = document.getElementById('artistsBox');
let contentStr = "";

let imgArr = [
    "../img/artists/logos/AviciiLogoWhite.png",
    "../img/artists/logos/MarshmelloLogoWhite.png",
    "../img/artists/logos/MartinGarrixLogoWhite.png"
];

//imgSlider();

function imgSlider() {
    for (let i = 0; i < imgArr.length; i++) {
        setAnimation();
        setTimeout(setimg(i), 5000);
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

writeArtists();

function writeArtists() {
    for (let i = 0; i < artistArr.artists.length; i++) {
        if (i % 2 == 0) {
            contentStr += `<div class="artistItems" id="artistItem${i}">
                  <div class="imgBox">
                    
                  </div>
                  
                  <div class="textBox">
                    <h1>${artistArr.artists[i][0].name}</h1>
                    <p>Age: ${artistArr.artists[i][0].age}</p>
                    <p>Home Country: ${artistArr.artists[i][0].country}</p>
                    <p>Greatest Hit: ${artistArr.artists[i][0].greatestSong}</p>
                    <p>${artistArr.artists[i][0].description}</p>
                  </div>
                  </div>`;
        } else {
            contentStr += `<div class="artistItems" id="artistItem${i}">
                  <div class="textBox">
                    <h1>${artistArr.artists[i][0].name}</h1>
                    <p>Age: ${artistArr.artists[i][0].age}</p>
                    <p>Home Country: ${artistArr.artists[i][0].country}</p>
                    <p>Greatest Hit: ${artistArr.artists[i][0].greatestSong}</p>
                    <p>${artistArr.artists[i][0].description}</p>
                  </div>


                  <div class="imgBox">
                    
                  </div>
                  </div>`;
        }
    }

    artistBox.innerHTML = contentStr;

    let artistImgClass = document.getElementsByClassName('imgBox');
    let aritstItemClass = document.getElementsByClassName('artistItems');

    for (let i = 0; i < artistArr.artists.length; i++) {
        artistImgClass[i].style = `background-image: url(${artistArr.artists[i][0].img});`;

        if (i % 2 == 0) {
            aritstItemClass[i].style = `transform: rotate(2deg);`;
        } else {
            aritstItemClass[i].style = `transform: rotate(-2deg);`;
        }
    }
}

gsap.registerPlugin(ScrollTrigger);

let artistItems = document.getElementsByClassName('artistItems');

animateBoxes();

function animateBoxes() {
    for (let i = 0; i < artistItems.length; i++) {
        let current = document.getElementById(`artistItem${i}`);



        if (i % 2 == 0) {
            gsap.set(current, {
                x: '-40%',
                opacity: 0
            });

            gsap.to(current, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: current,
                    start: '60% 80%',
                }
            });
        } else {
            gsap.set(current, {
            x: '40%',
            opacity: 0
            });

            gsap.to(current, {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: current,
                    start: '60% 80%',
                }
            });
        }
    }
}



