(function() {
    async function loadProducts() {
        const response = await fetch('products.json');
        products = await response.json();
        renderStorePage();
    }

    function renderStorePage(products) {
        document.main.innerHTML += `

`
    }
}) ();