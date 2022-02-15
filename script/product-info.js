(function () {

    function showInfo() {
        const product = JSON.parse(localStorage.product || "{}");
        if (!product) return;
        document.body.innerHTML += `${product.name}`;
    }

    showInfo();
    function renderPage() {
    document.body.innerHTML += `
    <main id="main" class="centered-horizontally">
        <div class="main-width">
            <a href="store.html"><p class="homepage">Store homepage</p></a>
            <div class="item">
                <div class="left centered-horizontally"><img src="images/shop-items/athena.png" class="product-info" /></div>
                <div class="right">
                    <p class="stocked">In stock</p>
                    <h4 class="product-info">Athena</h4>
                    <h3 class="product-info">Product code 30</h3>
                    <h5 class="product-info">$199,00</h5>
                    <button class="product-info">Add to cart</button>
                    <div class="product-info"><h6 class="product-info">DESCRIPTION</h6></div>
                    <p class="product-info">The necklace in the ancient Greek style beckons with its elegance. It is perfect for everyday looks and evening dresses. The patterns are made of gold by hand.</p>
                </div>
            </div>
        </div>
    </main>
`
    }

    renderPage()
})();