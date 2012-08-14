(function(){
// add hatena favicon before link
function add_favicon(link) {
    var favicon = document.createElement('img');
    favicon.src = "http://favicon.hatena.ne.jp/?url=" + encodeURI(link.href);
    favicon.width = 16;
    favicon.alt   = "";
    favicon.style.marginRight = "1ex";
    link.parentNode.insertBefore(favicon, link);
}

// apply the function to each element found by the path
(function (path, f, root) {
    var root = (root == null) ? document : root;
    var matches = root.evaluate(
        path, root, null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < matches.snapshotLength; i++)
        f(matches.snapshotItem(i));
})(
    "//a[@class='l']", add_favicon);
}())