const main = document.getElementById("main");
const sub = document.getElementById("subheadings");
const sub2 = document.getElementById("subheadings2");
const sub3 = document.getElementById("subheadings3");
const sub4 = document.getElementById("subheadings4");

const imgElements = Array.from({ length: 20 }, (_, i) => document.getElementById(`img${i + 1}`));

const abtme = document.getElementById("aboutme");
const photo = document.getElementById("Photography");
const video = document.getElementById("Videography");
const proj = document.getElementById("projects");

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;

    if (abtme) {
        abtme.style.backgroundPositionY = offset * 1.3 + "px";
    }

    if (photo) {
        photo.style.backgroundPositionY = (offset - 1800) * 1.8 + "px";
    }

    if (video) {
        video.style.backgroundPositionY = (offset - 1400) * 3.5 + "px";
    }

    if (proj) {
        proj.style.backgroundPositionY = (offset - 1800) * 1.8 + "px";
    }

    if (main) {
        main.style.position = 'absolute';
        main.style.top = offset * 0.45 + "px";
    }

    // Verificați existența și setați stilurile pentru celelalte elemente
    if (sub) {
        sub.style.position = 'absolute';
        sub.style.left = offset * 0.68 + "px";
    }

    if (sub2) {
        sub2.style.position = 'absolute';
        sub2.style.left = (offset - 650) * 0.68 + "px";
    }

    if (sub3) {
        sub3.style.position = 'absolute';
        sub3.style.left = (offset - 1220) * 0.68 + "px";
    }

    if (sub4) {
        sub4.style.position = 'absolute';
        sub4.style.left = (offset - 1550) * 0.68 + "px";
    }

    // Verificați existența și setați stilurile pentru imagini
    imgElements.forEach((img, index) => {
        if (img) {
            img.style.position = 'absolute';
            img.style.left = (offset - 1000 - index * 100) * 5 + "px";
        }
    });
});


    


