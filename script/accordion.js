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

function plusToggle(id) {
    document.getElementById("line0").classList.remove("faq-open");
    document.getElementById("line1").classList.remove("faq-open");
    document.getElementById("line2").classList.remove("faq-open");
    document.getElementById("line3").classList.remove("faq-open");
    document.getElementById("line4").classList.remove("faq-open");
}