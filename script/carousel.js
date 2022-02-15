function slide(x){
    if (x === 0) {
        document.getElementById("slide1").classList.remove("second-slide");
        document.getElementById("slide2").classList.remove("second-slide");
        document.getElementById("slide3").classList.remove("second-slide");
        document.getElementById("slide1").classList.remove("third-slide");
        document.getElementById("slide2").classList.remove("third-slide");
        document.getElementById("slide3").classList.remove("third-slide");
        document.getElementById("testimonials-button1").classList.add("active");
        document.getElementById("testimonials-button2").classList.remove("active");
        document.getElementById("testimonials-button3").classList.remove("active");
    }
    if (x === 1) {
        document.getElementById("slide1").classList.add("second-slide");
        document.getElementById("slide2").classList.add("second-slide");
        document.getElementById("slide3").classList.add("second-slide");
        document.getElementById("slide1").classList.remove("third-slide");
        document.getElementById("slide2").classList.remove("third-slide");
        document.getElementById("slide3").classList.remove("third-slide");
        document.getElementById("testimonials-button1").classList.remove("active");
        document.getElementById("testimonials-button2").classList.add("active");
        document.getElementById("testimonials-button3").classList.remove("active");
    }
    if (x === 2) {
        document.getElementById("slide1").classList.remove("second-slide");
        document.getElementById("slide2").classList.remove("second-slide");
        document.getElementById("slide3").classList.remove("second-slide");
        document.getElementById("slide1").classList.add("third-slide");
        document.getElementById("slide2").classList.add("third-slide");
        document.getElementById("slide3").classList.add("third-slide");
        document.getElementById("testimonials-button1").classList.remove("active");
        document.getElementById("testimonials-button2").classList.remove("active");
        document.getElementById("testimonials-button3").classList.add("active");
    }
} /// proof of concept, bad code