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

var temp = 5;

function accordionDisplay(x) {
    if (x === temp) {
        temp = 5;
        document.getElementById(x).style.display = "none";
    }
    else {
        if (temp !== 5) {
        document.getElementById(temp).style.display = "none";
        }
        temp = x;
        document.getElementById(x).style.display = "block";
    }
}
