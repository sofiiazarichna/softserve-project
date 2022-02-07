(function () {
    async function loadProducts() {
        const response = await fetch('products.json');
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

    function renderProduct(products) {
        const productsContainer = document.querySelector(".shop-front")
        for (const product of products) {
            productsContainer.innerHTML += `
            <div class="shop-item centered-horizontally">
                <img src="${product.imgUrl}" alt="${product.imgAlt}" class="shop-item-img responsive" />
                <h5 class="shop-item-h5">${product.name}</h5>
                <h3 class="shop-item-h3">$${product.price}</h3>
                <button class="shop-item-button">— Add to cart</button>
            </div>`;
        }
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
                <img src="${products[order].imgUrl}" alt="${products[order].imgAlt}" class="out-of-stock-shop-item-img responsive" />
                <h5 class="shop-item-h5">${products[order].name}</h5>
                <h3 class="out-of-stock-shop-item-h3">$${parseInt(products[order].price).toFixed(2)}</h3>
                <button class="out-of-stock-shop-item-button ">Out of stock</button>
            </div>`;
        }
        else {
        document.getElementById(htmlId).innerHTML += `
            <div class="shop-item centered-horizontally">
                <img src="${products[order].imgUrl}" alt="${products[order].imgAlt}" class="shop-item-img responsive" />
                <h5 class="shop-item-h5">${products[order].name}</h5>
                <h3 class="shop-item-h3">$${parseInt(products[order].price).toFixed(2)}</h3>
                <button class="shop-item-button">— Add to cart</button>
            </div>`;
        }
    }

    function renderStorePage(products) {
        document.getElementById("store-homepage").innerHTML += `
            <h4>Store homepage (${products.length})</h4>
            <h4>Products (${products.length})</h4>
            <div></div>
        `;
    }

    loadProducts();
})()   
