// ==UserScript==
// @name        Switch To General Knowledge - glean.com
// @namespace   Violentmonkey Scripts
// @match       https://app.glean.com/chat
// @grant       none
// @version     1.0
// @author      -
// @description Switch to the "General Knowledge" section on the Glean chat application
// ==/UserScript==

// Use a MutationObserver to monitor changes in the DOM and triggers a click event on the "General" button if it's not already pressed.
window.onload = () => {
    let observer = new MutationObserver((mutations, observer) => {
        let contentWindow = document.getElementById("content-window");
        if(contentWindow){
            buttons = contentWindow.querySelectorAll("button");
            buttons.forEach( (b) => {
                if (b.getAttribute("aria-label") === "General" && b.getAttribute("aria-pressed") === "false") {
                    alert("Switching To General Knowledge")
                    console.log(b)
                    setTimeout(function() {
                        b.click();
                    }, 1000);
                }
            })
            observer.disconnect(); // Stop observing
        }
    });

    // Start observing
    observer.observe(document, {childList: true, subtree: true});
}
