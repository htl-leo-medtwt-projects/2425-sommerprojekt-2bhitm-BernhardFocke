let productContainer = document.getElementById('productContainer');
let searchInput = document.getElementById('searchText');


let searchString = "";

listProducts();

async function listProducts() {
    productContainer.innerHTML = "";

    try {
        let responds = await fetch('../JSON/equipmentJSON.json');
        let productsJSON = await responds.json();
        console.log(productsJSON);

        for (let i = 0; i < productsJSON.products.length; i++) {
            productContainer.innerHTML += `<div id="product${i}" class="products">
                                           <h2>${productsJSON.products[i][0].name}</h2>
                                           <p>Published by ${productsJSON.products[i][0].company}</p>
                                           <p>Typ: ${productsJSON.products[i][0].type}
                                           <h1>${productsJSON.products[i][0].price} €</h1>
                                           </div>`;
        }
    } catch (error) {
        throw error;
    }
}

async function listSearchProducts(searchString) {
    productContainer.innerHTML = "";

    try {
        let responds = await fetch('../JSON/equipmentJSON.json');
        let productsJSON = await responds.json();
        console.log(productsJSON);

        for (let i = 0; i < productsJSON.products.length; i++) {
            if (productsJSON.products[i][0].name.includes(searchString)) {
                productContainer.innerHTML += `<div class="products">
                                           <h2>${productsJSON.products[i][0].name}</h2>
                                           <p>Published by ${productsJSON.products[i][0].company}</p>
                                           <p>Typ: ${productsJSON.products[i][0].type}
                                           <h1>${productsJSON.products[i][0].price} €</h1>
                                           </div>`;
            }
        }
    } catch (error) {
        throw error;
    }
}

function searchProduct() {
    searchString = searchInput.value;
    searchInput.value = "";
    listSearchProducts(searchString);
}

searchInput.addEventListener('keyup', function (e) {
    if (e.key == 'Enter') {
        searchProduct();
    }
});

//GSAP
gsap.registerPlugin(ScrollTrigger);
let products = document.getElementsByClassName('products');

animateProducts();

let current;

function animateProducts() {
    //for (let i = 0; i < products.length; i++) {
        //current = document.getElementById(`product${i}`);

        gsap.set(searchInput, {
            x: '40%',
            opacity: 0
        });

        gsap.to(searchInput, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
                trigger: searchInput,
                start: '60% 80%',
            }
        });
    //}
}
