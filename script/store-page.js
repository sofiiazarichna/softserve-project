(function () {
    async function loadProducts() {
        const response = await fetch('products.json');
        products = await response.json();
        renderStorePage(products)
    }

    function renderStorePage(products) {
        document.getElementById('main').classList.add("centered-horizontally");
        document.getElementById('main').innerHTML += `
            <div class="main-width">
                <h2 class="homepage">Store homepage (${products.width})</h2>
                <h2>Products (${products.width})</h2>
                <div id="store-page-items">
                </div>
            </div>
    `
        for (product of products) {
            document.getElementById('store-page-items').innerHTML += `
                    <div class="store-item">
                        <img src="${product.imgUrl}" alt="${product.imgAlt}" class="responsive" />
                        <h5 class="store-item">${product.name}</h5>
                        <h3 class="store-item">$${parseInt(product.price).toFixed(2)}</h3>
                        <button class="store-item">Buy</button>
                    </div>
    `
        }
    }

    loadProducts();
})()

