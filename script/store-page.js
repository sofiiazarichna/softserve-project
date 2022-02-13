(function () {
    async function loadProducts() {
        const response = await fetch('products.json');
        products = await response.json();
        renderStorePage(products);
    }

    function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    }



    function renderStorePage(products) {
        document.getElementById('main').classList.add("centered-horizontally");
        document.getElementById('main').innerHTML += `
            <div class="main-width">
                <h2 class="homepage">Store homepage (${products.length})</h2>
                <h2>Products (${products.length})</h2>
                <div id="store-page-items">
                </div>
            </div>
    `
        products.sort(compare);
        for (product of products) {
            document.getElementById('store-page-items').innerHTML += `
                    <div class="store-item">
                        <a class="info-link" href="product-info.html" data-id=${product.id}><img src="${product.imgUrl}" alt="${product.imgAlt}" class="responsive" /></a>
                        <h5 class="store-item">${product.name}</h5>
                        <h3 class="store-item">$${parseInt(product.price).toFixed(2)}</h3>
                        <button class="store-item">Buy</button>
                    </div>
    `
        }
        document.querySelectorAll('.info-link').forEach(link => link.addEventListener('click', productInfoClick));
    }

    loadProducts();
})()

