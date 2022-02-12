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
    if (products[order].stock == 0) {
        document.getElementById(htmlId).innerHTML += `
            <div class="shop-item centered-horizontally">
                <a href="product-page.html"><img src="${products[order].imgUrl}" alt="${products[order].imgAlt}" class="shop-item-img responsive out-of-stock" /></a href="product-page.html">
                <h5 class="shop-item-h5">${products[order].name}</h5>
                <h3 class="shop-item-h3 out-of-stock">$${parseInt(products[order].price).toFixed(2)}</h3>
                <button class="shop-item-button out-of-stock">Out of stock</button>
            </div>`;
    }
    else {
        document.getElementById(htmlId).innerHTML += `
            <div class="shop-item centered-horizontally">
                <a href="product-page.html"><img src="${products[order].imgUrl}" alt="${products[order].imgAlt}" class="shop-item-img responsive" /></a href="product-page.html">
                <h5 class="shop-item-h5">${products[order].name}</h5>
                <h3 class="shop-item-h3">$${parseInt(products[order].price).toFixed(2)}</h3>
                <button class="shop-item-button">— Add to cart</button>
            </div>`;
    }
}
})() 