// ==UserScript==
// @name        QuitDontAsk - music.youtube.com
// @namespace   Violentmonkey Scripts
// @match       https://music.youtube.com/*
// @grant       none
// @version     1.0
// @author      sphan
// @description 12/12/2023, 6:13:37 PM
// ==/UserScript==


(function() {
    'use strict';
    window.addEventListener('beforeunload', function (e) {
      e.stopImmediatePropagation();
    }, true);
})();
