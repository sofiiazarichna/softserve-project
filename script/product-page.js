function renderPage(products, id) {
    async function loadData() {
        const response = await fetch('products.json');
        const products = await response.json();

    }
    let order = returnOrder(products, id);
        if (products[order].stock == 0) {
            document.innerHTML += `
            <h2>${products[order].name}</h1>
            `    
}