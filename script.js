// ==========================================
// RÉCUPÉRATION DES ÉLÉMENTS
// ==========================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const header = document.querySelector(".header");


// ==========================================
// OUVRIR / FERMER LE MENU MOBILE
// ==========================================

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ==========================================
// FERMER LE MENU APRÈS AVOIR CLIQUÉ
// SUR UN LIEN
// ==========================================

const liensMenu = document.querySelectorAll(
    ".nav-links a"
);

liensMenu.forEach(function (lien) {

    lien.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// OMBRE DU MENU AU DÉFILEMENT
// ==========================================

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 5px 25px rgba(15, 23, 42, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ==========================================
// ANNÉE AUTOMATIQUE DU FOOTER
// ==========================================

console.log(
    "CV de Wini Dekon chargé avec succès."
);