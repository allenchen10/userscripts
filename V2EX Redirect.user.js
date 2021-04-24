// ==UserScript==
// @name                 V2EX Redirect
// @name:zh-CN           V2EX 自动重定向
// @namespace            http://tampermonkey.net/
// @version              0.1
// @description          Redirect subdomains of v2ex.com to www.v2ex.com
// @description:zh-CN    重定向 v2ex.com 的子域名至 www.v2ex.com
// @author               Jiachen Chen
// @match                *://*.v2ex.com/*
// @match                *://v2ex.com/*
// @icon                 https://www.google.com/s2/favicons?domain=v2ex.com
// @grant                none
// ==/UserScript==

(function () {
    "use strict";

    if (location.hostname != "www.v2ex.com") {
        window.location.replace(
            "https://www.v2ex.com" +
                location.pathname +
                location.search +
                location.hash
        );
    }
})();
