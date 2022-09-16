'use strict';

// selecting elements
const popupOverlay = document.querySelector(".popup-overlay");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".popup-close");
const popupContents = [...document.querySelectorAll(".popup-content")];
const menusList = document.querySelector(".menus")

let currPopupContent;
let timeoutOne;
let timeoutTwo;


menusList.addEventListener("click", function(e) {
    popupOverlay.style.display = "flex";
    setTimeout(function(){
        popupOverlay.style.opacity = "1";
    }, 100);
    const menuType = e.target.dataset.type;
    popupContents.forEach(el => {
        if(el.classList.contains(menuType)) {
            currPopupContent = el;
            el.style.display = "block";
            setTimeout(function() {
                popup.style.opacity = "1"
            }, 0)
            setTimeout(function() {
                popup.style.transform = "translateY(0)";
            }, 0)
        } else {
            el.style.display = "none";
        }
    });
});

btnClose.addEventListener("click", function(e) {
    popup.style.transform = "translateY(-8rem)";
    setTimeout(function() {
        popup.style.opacity = "0"
    },0)
    setTimeout(function() {
        currPopupContent.style.display = "none"
    }, 1100)
    setTimeout(function() {
        popupOverlay.style.opacity = "0"
    }, 1150)
    setTimeout(function() {
        popupOverlay.style.display = "none"
    }, 1450)
});