function toggleBurger() {
    document.getElementById("burger-icon-top-bun").classList.toggle("burger-open");
    document.getElementById("burger-icon-patty").classList.toggle("burger-open");
    document.getElementById("burger-icon-bottom-bun").classList.toggle("burger-open");
}

(function () {
function loadTemplate() {
    document.head.innerHTML += `
    <link rel="stylesheet" href="styles/header.css">
    <link rel="stylesheet" href="styles/footer.css">
    `
    document.body.innerHTML += `
        <header id="header" class="centered-horizontally">
            <div class="header-width space-between">
                <a href="index.html"><img src="images/icons/aurora.svg" alt="the logo of the store" class="header-icon" /></a>
                <div id="nav-div">
                    <nav id="nav">
                        <a href="#best-sellers"><p class="nav-link">Trending</p></a>
                        <a href="store.html"><p class="nav-link">Collection</p></a>
                        <a href="#testimonials"><p class="nav-link">Testimonials</p></a>
                        <a href="#footer"><p class="nav-link">Contact Us</p></a>
                    </nav>
                </div>
                <div class="burger-icon" onclick="toggleBurger()">
                    <div id="burger-icon-top-bun"></div>
                    <div id="burger-icon-patty" ></div>
                    <div id="burger-icon-bottom-bun"></div>
                </div>
            </div>
        </header>
        <footer id ="footer" class="centered-horizontally">
            <img src="images/icons/aurora.svg" alt="the logo of the store" style="width: 100px; height: inherit;" />
            <div class="table space-between">
                <div class="column centered-horizontally">
                    <p class="title">STORE</p>
                    <div class="centered-horizontally">
                        <a><p>Trending</p></a>
                        <a><p>Collection</p></a>
                        <a><p>Testimonials</p></a>
                        <a><p>Contacts</p></a>
                    </div>
                </div>
                <div class="column centered-horizontally">
                    <p class="title">GET IN TOUCH</p>
                    <div class="centered-horizontally">
                        <a href="mailto:aurora@email.com"><p>aurora@email.com</p></a>
                        <a href="tel:+12345678900"><p>+1 (234) 567 89 00</p></a>
                        <a href="https://goo.gl/maps/shVdrM1BepCcqThk7"><p class="centered">310 E 67th St, New York,</p><p class="centered">NY 10065, USA</p></a>
                    </div>
                </div>
                <div class="column centered-horizontally">
                    <p class="title">CARE</p>
                    <div class="centered-horizontally">
                        <a><p>Certificates</p></a>
                        <a><p>FAQ</p></a>
                        <a><p>Legal & Privacy</p></a>
                        <a><p>Returns</p></a>
                    </div>
                </div>
            </div>
            <div class="icon-display">
                <svg class="icon-div" viewBox="0 0 32 32">
                    <path class="logo_2gS" d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"></path>
                    <path class="insta-mask-logo-hover_19f" style="fill:url(#si61defbcbdb595e0022b35ddde9142d0265ad4372af43d0b12e217ab816420034153894dad016e-aaf2-419e-8e9a-26a83461cac5hover)" d="M12.7045454,8 C10.1221593,8 8,10.1193185 8,12.7045454 L8,19.2954545 C8,21.8778407 10.1193185,24 12.7045454,24 L19.2954545,24 C21.8778407,24 24,21.8806822 24,19.2954545 L24,12.7045454 C24,10.1221593 21.8806822,8 19.2954545,8 L12.7045454,8 Z M12.7045454,9.45454545 L19.2954545,9.45454545 C21.0937498,9.45454545 22.5454545,10.9062502 22.5454545,12.7045454 L22.5454545,19.2954545 C22.5454545,21.0937498 21.0937498,22.5454545 19.2954545,22.5454545 L12.7045454,22.5454545 C10.9062502,22.5454545 9.45454545,21.0937498 9.45454545,19.2954545 L9.45454545,12.7045454 C9.45454545,10.9062502 10.9062502,9.45454545 12.7045454,9.45454545 Z M20.2954545,11.0454545 C19.9289774,11.0454545 19.6363636,11.3380684 19.6363636,11.7045454 C19.6363636,12.0710225 19.9289774,12.3636364 20.2954545,12.3636364 C20.6619316,12.3636364 20.9545454,12.0710225 20.9545454,11.7045454 C20.9545454,11.3380684 20.6619316,11.0454545 20.2954545,11.0454545 Z M16,11.6363636 C13.599432,11.6363636 11.6363636,13.599432 11.6363636,16 C11.6363636,18.400568 13.599432,20.3636364 16,20.3636364 C18.400568,20.3636364 20.3636364,18.400568 20.3636364,16 C20.3636364,13.599432 18.400568,11.6363636 16,11.6363636 Z M16,13.0909091 C17.6164771,13.0909091 18.9090909,14.3835229 18.9090909,16 C18.9090909,17.6164771 17.6164771,18.9090909 16,18.9090909 C14.3835229,18.9090909 13.0909091,17.6164771 13.0909091,16 C13.0909091,14.3835229 14.3835229,13.0909091 16,13.0909091 Z"></path>
                </svg><br />
                <svg class="icon-div" viewBox="0 0 32 32">
                    <path d="M23.5445333,10.2885333 C23.0796444,10.5863111 22.0122666,11.0190222 21.4858666,11.0190222 L21.4858666,11.0199111 C20.8848,10.392 20.0385777,10 19.1000888,10 C17.2773333,10 15.7992889,11.4780444 15.7992889,13.3000888 C15.7992889,13.5532445 15.8286222,13.8001778 15.8828444,14.0369778 L15.8823111,14.0369778 C13.4097777,13.9720888 10.7056,12.7328 9.07768889,10.6117333 C8.0768,12.3441778 8.94293333,14.2709334 10.0787556,14.9729778 C9.68995555,15.0023111 8.97422222,14.9281778 8.63733333,14.5994666 C8.61475555,15.7493334 9.16764444,17.2728889 11.1836444,17.8256 C10.7953778,18.0344889 10.1080889,17.9745778 9.80924444,17.9301333 C9.91413329,18.9008 11.2734222,20.1697778 12.7598222,20.1697778 C12.2300445,20.7825777 10.2368,21.8940444 8,21.5404445 C9.51911111,22.4647111 11.2896,22.9999999 13.1635555,22.9999999 C18.4888889,22.9999999 22.6245334,18.6840889 22.4019555,13.3598222 C22.4010666,13.3539556 22.4010666,13.3480889 22.4005334,13.3416889 C22.4010666,13.328 22.4019555,13.3143111 22.4019555,13.3000888 C22.4019555,13.2835556 22.4005334,13.2679111 22.4,13.2519111 C22.8847999,12.9203555 23.5352888,12.3338667 24,11.5619556 C23.7304889,11.7104 22.9219555,12.0076445 22.1696,12.0814222 C22.6524444,11.8208 23.3678222,10.9672889 23.5445333,10.2885333"></path>
                </svg><br />
                <svg class="icon-div" viewBox="0 0 32 32">
                    <path class="logo_2gS" d="M24.8319297,11.4874563 C24.6803369,10.1603684 24.3639692,9.77357894 24.1398754,9.59352174 C23.7839619,9.31343284 23.1380446,9.21340113 22.2746246,9.15338207 C20.8905163,9.06001905 18.537532,9 16,9 C13.455877,9 11.1094837,9.05335028 9.72537529,9.15338207 C8.86195533,9.21340113 8.21603808,9.31343284 7.8601245,9.59352174 C7.63603076,9.77357894 7.32625412,10.1603684 7.1680703,11.4874563 C6.94397657,13.4013973 6.94397657,17.7627818 7.1680703,19.6767227 C7.32625412,21.0038107 7.63603076,21.3906002 7.8601245,21.5706573 C8.21603808,21.8507463 8.86195533,21.950778 9.72537529,22.0107971 C11.1094837,22.1041601 13.455877,22.164179 16,22.164179 C18.544123,22.164179 20.8905163,22.1041601 22.2746246,22.0107971 C23.1380446,21.950778 23.7839619,21.8507463 24.1398754,21.5706573 C24.3639692,21.3972689 24.6737458,21.0038107 24.8319297,19.6767227 C25.0560234,17.7627818 25.0560234,13.4013973 24.8319297,11.4874563 Z M13.8249725,18.4429978 L13.8249725,12.7145125 L19.2559502,15.5754208 L13.8249725,18.4429978 Z"></path>
                </svg>
            </div>
            <div class="centered-horizontally">
                <p class="copyright">&#169; Created by | All rights Reserved</p>
            </div>
        </footer >
        <script src="script/burger-menu.js"></script>
    `
    }

    loadTemplate();
})()


