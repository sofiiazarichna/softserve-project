function storeDisplay() {
    document.getElementById("earrings").style.display = "none";
    document.getElementById("earringsButtonDiv").classList.remove("checked-radio");
    document.getElementById("earringsButtonLabel").classList.remove("checked-label");
    document.getElementById("rings").style.display = "none";
    document.getElementById("ringsButtonDiv").classList.remove("checked-radio");
    document.getElementById("ringsButton").classList.remove("checked-label");
    document.getElementById("necklaces").style.display = "none";
    document.getElementById("necklacesButtonDiv").classList.remove("checked-radio");
    document.getElementById("necklacesButton").classList.remove("checked-label");
    if (earringsButton.checked == true) {
        document.getElementById("earrings").style.display = "block";
        document.getElementById("earringsButtonDiv").classList.add("checked-radio");
        document.getElementById("earringsButtonLabel").classList.add("checked-label");
    }
    if (ringsButton.checked == true) {
        document.getElementById("rings").style.display = "block";
        document.getElementById("ringsButtonDiv").classList.add("checked-radio");
        document.getElementById("ringsButtonLabel").classList.add("checked-label");
    }
    if (necklacesButton.checked == true) {
        document.getElementById("necklaces").style.display = "block";
        document.getElementById("necklacesButtonDiv").classList.add("checked-radio");
        document.getElementById("necklacesButtonLabel").classList.add("checked-label");
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