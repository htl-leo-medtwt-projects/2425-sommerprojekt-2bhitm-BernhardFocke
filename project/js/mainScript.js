//startscreen
let introScreen = document.getElementById('intro');

let introContent = [
    {
        "img": './img/artitsts/marschmello1PNG.png',
        "text": 'Text'
    },
    {
        "img": './img/artitsts/kygo1PNG.png',
        "text": 'Text'
    }
];

setIntroBoxes();

function setIntroBoxes() {
    let contentStr = "";

    for(let i = 0; i < introContent.length; i++) {
        contentStr  += `<div class="intrBox">
                        <div class="imgBox"><img src="${introContent[i].img}" alt="img${i}"></div>
                        <div class="textBox"><p>${introContent[i].text}</p></div>
                        </div>`;
    }

    introScreen.innerHTML += contentStr;
}