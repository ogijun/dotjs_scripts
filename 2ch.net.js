// ==UserScript==
// @name        ime.nu ttp relinker
// @namespace   http://ccm.sherry.jp/
// @description Relinks 2ch's ime.nu urls.
// @include     http://*.2ch.net/*
// @include     http://*.bbspink.com/*
// ==/UserScript==

(function () {
    var xpath_anchor = "//a";
    var res = document.evaluate(
	xpath_anchor, document, null,
	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    var re_imenu = /^(https?):\/\/(?:[^\/]+?\.)*?(?:ime\.nu|ime\.st)\/(.+)$/i;
    var i, anchor;
    for (i = 0; anchor = res.snapshotItem(i); i++) {
	anchor.href = anchor.href.replace(re_imenu, "$1://$2");
    }
    function ttpToHttpLink() {
        var dd = document.getElementsByTagName("dd");
        var ttp = /([^h])(ttps?:\/\/[\x21-\x7E]+)/ig;
        for (var i=0; i<dd.length; i++) {
            dd[i].innerHTML = dd[i].innerHTML.replace(ttp, "$1<a href=h$2>$2</a>");
        }
    }

    window.addEventListener("load", function(e){
        ttpToHttpLink();
        modifyLinks();
    }, false);
})();
