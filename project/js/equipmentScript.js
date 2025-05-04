let productContainer = document.getElementById('productContainer');

listProducts();

async function listProducts() {
    try {
        let responds = await fetch('../JSON/equipmentJSON.json');
        let productsJSON = await responds.json();
        console.log(productsJSON);

        for(let i = 0; i < productsJSON.products.length; i++) {
            productContainer.innerHTML += `<div class="products">
                                           <h2>${productsJSON.products[i][0].name}</h2>
                                           </div>`;
        }
    } catch (error) {
        throw error;
    }
}

