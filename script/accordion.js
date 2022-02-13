var openButton = 5; //if it's 5 the accordion is closed

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