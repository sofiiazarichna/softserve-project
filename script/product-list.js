function storeDisplay(str) {
    document.getElementById("earrings").style.display = "none";
    document.getElementById("rings").style.display = "none";
    document.getElementById("necklaces").style.display = "none";
    document.getElementById(str).style.display = "flex";
}

function storeActiveButton(str) {
    document.getElementById("earrings-button").classList.remove("store-button-active");
    document.getElementById("rings-button").classList.remove("store-button-active");
    document.getElementById("necklaces-button").classList.remove("store-button-active");
    document.getElementById(str).classList.add("store-button-active");
}

(function () {
    async function loadProducts() {
        const response = await fetch('script/products.json');
        const products = await response.json();

        renderProduct(products, 33, "best-selling-items");
        renderProduct(products, 21, "best-selling-items");
        renderProduct(products, 32, "best-selling-items");
        renderProduct(products, 34, "best-selling-items");

        renderProduct(products, 18, "earrings");
        renderProduct(products, 20, "earrings");
        renderProduct(products, 19, "earrings");
        renderProduct(products, 24, "earrings");

        renderProduct(products, 28, "rings");
        renderProduct(products, 27, "rings");
        renderProduct(products, 25, "rings");
        renderProduct(products, 26, "rings");

        renderProduct(products, 29, "necklaces");
        renderProduct(products, 31, "necklaces");
        renderProduct(products, 30, "necklaces");
        renderProduct(products, 35, "necklaces");
    }

    function returnOrder(products, id) {
        for (var i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                return i;
            }
        }
        return 0;
    }

    function renderProduct(products, id, htmlId) {
        let order = returnOrder(products, id);
            document.getElementById(htmlId).innerHTML += `
                <div class="shop-item centered-horizontally">
                    <a class="info-link" href="product-info.html" data-id=${products[order].id}><img src="${products[order].imgUrl}" alt="${products[order].imgAlt}" class="shop-item-img responsive" /></a>
                    <h5 class="shop-item-h5">${products[order].name}</h5>
                    <h3 class="shop-item-h3">$${parseInt(products[order].price).toFixed(2)}</h3>
                    <button class="shop-item-button">Add to cart</button>
                </div>`;
    }

    loadProducts()
})()