(function () {
    const products = [
    {
        id: 18,
        name: "Bagels",
        imgUrl: "images/shop-items/bagels.png",
        imgAlt: "A pair of chain earrings with a thick bottom ring",
        price: 199.00,
        description: "Stylish and lightweight gold earrings of medium length. They will look really nice both with office and casual styles.",
        stock: 10
    },
    {
        id: 19,
        name: "Fantasy",
        imgUrl: "images/shop-items/fantasy.png",
        imgAlt: "A pair of earrings with heart-shaped decor",
        price: 249.00,
        description: "Long earrings with Swarovski crystals and various elements. Chains, hearts, round crystals make these earrings look really unusual.",
        stock: 10
    },
    {
        id: 20,
        name: "Dalida",
        imgUrl: "images/shop-items/dalida.png",
        imgAlt: "A pair of ring earrings with 3 beads on them",
        price: 199.00,
        description: "Elegant gold hoops with gold and diamond details. Looking good and comfortable to wear all day long.\ncarat total weight .13.",
        stock: 10
    },
    {
        id: 21,
        name: "Golden Sun",
        imgUrl: "images/shop-items/golden-sun.png",
        imgAlt: "A pair of thick ring earrings",
        price: 199.00,
        description: "These ethnic-style earrings will impress anyone. Make them a bold accent in any look, from business to casual.",
        stock: 0
    },
    {
        id: 24,
        name: "Keys",
        imgUrl: "images/shop-items/keys.png",
        imgAlt: "A pair of key-shaped earrings",
        price: 299.00,
        description: "Despite their shape, the earrings are designed in such a way that hair does not get tangled in them. The earrings are adorned with a row of diamonds and a large Swarovski crystal.\nCarat total weight .23.",
        stock: 10
    },
    {
        id: 25,
        name: "Yolanda",
        imgUrl: "images/shop-items/yolanda.png",
        imgAlt: "A slim ring with a big pearl",
        price: 199.00,
        description: "Incredible ring with a really big natural pearl from Okinawa. The pearl is surrounded by a row of round diamonds.\nCarat total weight .33.",
        stock: 10
    },
    {
        id: 26,
        name: "Eternity",
        imgUrl: "images/shop-items/eternity.png",
        imgAlt: "A thick ring with a small diamond",
        price: 249.00,
        description: "A wedding ring for those who prefer classic jewelry. Quite a massive gold bezel and a large diamond on it.\nCarat weight .35",
        stock: 10
    },
    {
        id: 27,
        name: "Genny",
        imgUrl: "images/shop-items/genny.png",
        imgAlt: "A ring with a big diamond",
        price: 599.00,
        description: "Exclusive ring in gold with a round diamond surrounded by rows of smaller brilliant diamonds. Once you wear it, you won't look at any other rings, as it's totally perfect.\nCarat total weight .43.",
        stock: 10
    },
    {
        id: 28,
        name: "Jillian",
        imgUrl: "images/shop-items/jillian.png",
        imgAlt: "A ring that has its one half divided into 5 seperate rows",
        price: 399.00,
        description: "Three rows of diamonds � what could be better? Perhaps only three rows of diamonds surrounded by 585 gold! This ring is immediately noticeable on the hand but does not look too defiant. Exactly what is needed!\nCarat total weight .51",
        stock: 10
    },
    {
        id: 29,
        name: "Cleopatra",
        imgUrl: "images/shop-items/cleopatra.png",
        imgAlt: "A chain necklace with 11 blocks hanging on it",
        price: 399.00,
        description: "This luxurious gold necklace will be a highlight of your look. Despite its impressive size, it is quite light and looks very stylish.",
        stock: 10
    },
    {
        id: 30,
        name: "Athena",
        imgUrl: "images/shop-items/athena.png",
        imgAlt: "A necklace with alternating gold and turquoise oval decor",
        price: 199.00,
        description: "The necklace in the ancient Greek style beckons with its elegance. It is perfect for everyday looks and evening dresses. The patterns are made of gold by hand.",
        stock: 10
    },
    {
        id: 31,
        name: "Sky",
        imgUrl: "images/shop-items/sky.png",
        imgAlt: "",
        price: 299.00,
        description: "This crescent and star pendant necklace looks delicate and graceful on a woman's neck, especially complimented with diamonds.\n32\"\" long.\nCarat total weight .31.",
        stock: 10
    },
    {
        id: 32,
        name: "Elegy",
        imgUrl: "images/shop-items/elegy.png",
        imgAlt: "",
        price: 199.00,
        description: "This mother-of-pearl plated oval pendant is perfect for any outfit. We can also help you choose a gold chain with the right length.",
        stock: 10
    },
    {
        id: 33,
        name: "Butterfly",
        imgUrl: "images/shop-items/butterfly.png",
        imgAlt: "",
        price: 99.00,
        description: "This gold pendant in the shape of a butterfly with a natural pearl will remind you of the cheerfulness and playfulness that is inherent in any woman.",
        stock: 10
    },
    {
        id: 34,
        name: "Moonlight",
        imgUrl: "images/shop-items/moonlight.png",
        imgAlt: "",
        price: 199.00,
        description: "Massive gold earrings with natural onyx. They will go well with any of your outfits, from trendy jeans to classy dresses.",
        stock: 0
    },
    {
        id: 35,
        name: "Delight",
        imgUrl: "images/shop-items/delight.png",
        imgAlt: "",
        price: 399.00,
        description: "Massive necklace with floral motifs. Decorated with a scattering of diamonds and large Swarovski crystals in the center.\nCarat total weight .20",
        stock: 10
    }
    ];

    function renderProduct(products) {
        const productsContainer = document.querySelector(".shop-front")
        for (const product of products) {
            productsContainer.innerHTML += `
            <div class="shop-item centered-horizontally">
                <img src="${product.imgUrl}" alt="${product.imgAlt}" class="shop-item-img responsive" />
                <h5 class="shop-item-h5">${product.name}</h5>
                <h3 class="shop-item-h3">$${product.price}</h3>
                <button class="shop-item-button">� Add to cart</button>
            </div>`;
        }
    }

/*    function renderProduct(products) {
        const productsContainer = document.querySelector(".shop-front")
        for (const product of products) {
            productsContainer.innerHTML += `
            <div class="shop-item centered-horizontally">
                <img src="${product.imgUrl}" alt="${product.imgAlt}" class="shop-item-img responsive" />
                <h5 class="shop-item-h5">${product.name}</h5>
                <h3 class="shop-item-h3">$${product.price}</h3>
                <button class="shop-item-button">� Add to cart</button>
            </div>`;
        }
    }
*/
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
                <img src="${products[order].imgUrl}" alt="${products[order].imgAlt}" class="shop-item-img responsive" />
                <h5 class="shop-item-h5">${products[order].name}</h5>
                <h3 class="shop-item-h3">$${products[order].price}</h3>
                <button class="shop-item-button">� Add to cart</button>
            </div>`;
    }

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
})()   