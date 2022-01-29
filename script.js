function storeDisplay() {
    document.getElementById("earrings").style.display = "none";
    document.getElementById("earringsButtonDiv").classList.remove("checked-radio");
    document.getElementById("rings").style.display = "none";
    document.getElementById("ringsButtonDiv").classList.remove("checked-radio");
    document.getElementById("necklaces").style.display = "none";
    document.getElementById("necklacesButtonDiv").classList.remove("checked-radio");
    if (earringsButton.checked == true) {
        document.getElementById("earrings").style.display = "block";
        document.getElementById("earringsButtonDiv").classList.add("checked-radio");
    }
    if (ringsButton.checked == true) {
        document.getElementById("rings").style.display = "block";
        document.getElementById("ringsButtonDiv").classList.add("checked-radio");
    }
    if (necklacesButton.checked == true) {
        document.getElementById("necklaces").style.display = "block";
        document.getElementById("necklacesButtonDiv").classList.add("checked-radio");
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