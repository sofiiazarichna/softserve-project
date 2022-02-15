(function () {

    function showInfo() {
        const product = JSON.parse(localStorage.product || "{}");
        if (!product) return;
        function renderPage() {
        document.body.innerHTML += `${product.name}`;
        document.body.innerHTML += `
        <main id="main" class="centered-horizontally">
            <div class="main-width">
                <a href="store.html"><p class="homepage">Store homepage</p></a>
                <div class="item">
                    <div class="left centered-horizontally"><img src="images/shop-items/athena.png" class="product-info" /></div>
                    <div class="right">
                        <p class="stocked">In stock</p>
                        <h4 class="product-info">${product.name}</h4>
                        <h3 class="product-info">Product code ${product.id}</h3>
                        <h5 class="product-info">$${parseInt(products[order].price).toFixed(2)}</h5>
                        <button class="product-info">Add to cart</button>
                        <div class="product-info"><h6 class="product-info">DESCRIPTION</h6></div>
                        <p class="product-info">${product.description}</p>
                    </div>
                </div>
            </div>
        </main>
    `
            renderPage()
        } 
    }

    showInfo();
})();
