let productContainer = document.getElementById('productContainer');
let searchInput = document.getElementById('searchText');

let searchString = "";
let productString = "";

listProducts();

function listProducts() {
    productString = "";

    for (let i = 0; i < productsArr.products.length; i++) {
        productString += `<div class="products" id="product${i}">
                                           <div class="productImg">
                                           
                                           </div>

                                           <div class="productText">
                                           <h2>${productsArr.products[i][0].name}</h2>
                                           <p>Published by ${productsArr.products[i][0].company}</p>
                                           <p>Typ: ${productsArr.products[i][0].type} </p>
                                           <h1>${productsArr.products[i][0].price} €</h1>
                                           </div>
                                           </div>`;

    }
    productContainer.innerHTML += productString;

    let productImg = document.getElementsByClassName('productImg');

    for (let i = 0; i < productsArr.products.length; i++) {
        productImg[i].style = `background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${productsArr.products[i][0].img});`;
    }
}


function listSearchProductsNew(searchString) {
    productContainer.innerHTML = "";
    productString = "";

    for (let i = 0; i < productsArr.products.length; i++) {
        if (productsArr.products[i][0].name.includes(searchString)) {
            productString += `<div class="products" id="product${i}">
                                           <div class="productImg">
                                           
                                           </div>

                                           <div class="productText">
                                           <h2>${productsArr.products[i][0].name}</h2>
                                           <p>Published by ${productsArr.products[i][0].company}</p>
                                           <p>Typ: ${productsArr.products[i][0].type}</p>
                                           <h1>${productsArr.products[i][0].price} €</h1>
                                           </div>
                                           </div>`;
        }

        productContainer.innerHTML = productString;
    }

    let productImgClass = document.getElementsByClassName('productImg');

    for (let i = 0; i < productsArr.products.length; i++) {
        if (productsArr.products[i][0].name.includes(searchString)) {
            for (let j = 0; j < productImgClass.length; j++) {
                productImgClass[j].style = `background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${productsArr.products[i][0].img});`;
            }
        }
    }
}

function searchProduct() {
    searchString = searchInput.value;
    searchInput.value = "";
    listSearchProductsNew(searchString);
}

searchInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        searchProduct();
    }
});

//GSAP
gsap.registerPlugin(ScrollTrigger);

animateProducts();

function animateProducts() {
    for (let i = 0; i < productsArr.products.length; i++) {
        current = document.getElementById(`product${i}`);

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
