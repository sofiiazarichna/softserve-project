var id;

function storeDisplay(x) {
    if (x === 1) {
        id = "earrings";
    }
    if (x === 2) {
        id = "rings";
    }
    if (x === 3) {
        id = "necklaces";
    }
    var y = document.getElementById(id);
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}