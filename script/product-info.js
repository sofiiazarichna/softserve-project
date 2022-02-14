(function () {

    function showInfo() {
        const product = JSON.parse(localStorage.product || "{}");
        if (!product) return;
        document.body.innerHTML += `${product.name}`;
    }

    showInfo();

})();