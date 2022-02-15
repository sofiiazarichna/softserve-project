const NumberOfSlots = document.querySelectorAll('button.accordion').length;

var openButton = NumberOfSlots;

function accordionDisplay(x) {
    if (x === openButton) {
        document.getElementById(openButton).style.display = "none";
        openButton = NumberOfSlots;
    }
    else {
        if (openButton !== NumberOfSlots) {
            document.getElementById(openButton).style.display = "none";
        }
        openButton = x;
        document.getElementById(x).style.display = "block";
    }
}