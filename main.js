const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const hamburgerMenu = document.getElementById("hamburger");
// aprire l'hamburger menu
openMenu.addEventListener('click',
    function () {
        hamburgerMenu.style.display = "block"
    }
);
// chiudere l'hamburger menu
closeMenu.addEventListener("click", 
    function() {
        hamburgerMenu.style.display = "none"
    }
);