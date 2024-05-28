// ==UserScript==
// @name        Only Show Super Tutor
// @namespace   Violentmonkey Scripts
// @match       https://www.cambly.com/*/student/tutors*
// @grant       none
// @version     1.0
// @author      sphan
// @run-at      document-idle
// @description 5/27/2024, 10:44:06 AM
// ==/UserScript==


(function() {
    'use strict';

    // Function to check and hide divs
    function hideNonSuperTutorDivs() {
        console.log("hideNonSuperTutorDivs");
        const allTutorDivs = document.querySelectorAll("div.ZuGlMTDMoEhif9oSevnvC > div");
        // Hide divs that do not contain "Super Tutor"
        allTutorDivs.forEach(div => {
            if (!div.textContent.includes("Super Tutor".toUpperCase())) {
                div.style.display = 'none';
            }
        });
    }

    // Create a MutationObserver to handle dynamically added content
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                hideNonSuperTutorDivs(); // Re-run the hiding function when new nodes are added
            }
        });
    });

    // Start observing the document body for added nodes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Initial run in case the page is already loaded
    hideNonSuperTutorDivs();
})();
