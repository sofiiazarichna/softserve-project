function storeDisplay() {
    document.getElementById("earrings").style.display = "none";
    document.getElementById("rings").style.display = "none";
    document.getElementById("necklaces").style.display = "none";
    if (earringsButton.checked == true) {
        document.getElementById("earrings").style.display = "block";
    }
    if (ringsButton.checked == true) {
        document.getElementById("rings").style.display = "block";
    }
    if (necklacesButton.checked == true) {
        document.getElementById("necklaces").style.display = "block";
    }
}