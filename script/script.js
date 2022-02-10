function storeDisplay(str) {
    document.getElementById("earrings").style.display = "none";
    document.getElementById("rings").style.display = "none";
    document.getElementById("necklaces").style.display = "none";
    document.getElementById(str).style.display = "flex";
}

function storeActiveButton(str) {
    document.getElementById("earrings-button").classList.remove("store-button-active");
    document.getElementById("rings-button").classList.remove("store-button-active");
    document.getElementById("necklaces-button").classList.remove("store-button-active");
    document.getElementById(str).classList.add("store-button-active");
}

var openButton = 5;

function accordionDisplay(x) {
    if (x === openButton) {
        openButton = 5;
        document.getElementById(x).style.display = "none";
    }
    else {
        if (openButton !== 5) {
            document.getElementById(temp).style.display = "none";
        }
        openButton = x;
        document.getElementById(x).style.display = "block";
    }
}