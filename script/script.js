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