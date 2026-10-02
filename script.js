/* =====================================================
   YUKIXP WEBSITE JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton =
    document.querySelector(".menu-button");

const nav =
    document.querySelector(".nav-links");


if (menuButton) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* ================= CURRENT YEAR ================= */

const year =
    document.querySelector("#year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= SOCIAL LINKS ================= */

const socials = {

    twitch:
        "https://www.twitch.tv/yukixppp",

    youtube:
        "https://www.youtube.com/channel/UCI0ijxJAKXqEPcFA7U3Kh6g",

    instagram:
        "https://www.instagram.com/yuk.ixp",

    tiktok:
        "https://www.tiktok.com/@yuk.ikp",

    discord:
        "https://discord.gg/NE9a6Fnpqs",

    patreon:
        "https://www.patreon.com/cw/yukixp",

    linktree:
        "https://linktr.ee/yukixp",

    pinterest:
        "https://pin.it/CcHMFAJOD"

};


/* ================= AUTO LINK SYSTEM ================= */

document
    .querySelectorAll("[data-social]")
    .forEach(link => {

        const platform =
            link.dataset.social;

        if (socials[platform]) {

            link.href =
                socials[platform];

        }

    });
```javascript
document.addEventListener("DOMContentLoaded", function () {

    const shopButtons = document.querySelectorAll(".shop-button");

    shopButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("Opening the official yukixp merch store...");

        });

    });

});
```

