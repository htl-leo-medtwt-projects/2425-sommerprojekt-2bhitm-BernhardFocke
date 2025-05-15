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
        if(i % 2 == 0) {
            contentStr += `<div class="artistItem">
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
            contentStr += `<div class="artistItem">
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
    let aritstItemClass = document.getElementsByClassName('artistItem');

    for(let i = 0; i < artistArr.artists.length; i++) {
        artistImgClass[i].style = `background-image: url(${artistArr.artists[i][0].img});`;

        if(i % 2 == 0) {
            aritstItemClass[i].style = `transform: rotate(2deg);`;
        } else {
            aritstItemClass[i].style = `transform: rotate(-2deg);`;
        }
    }
}