$("#main").t({
    caret: '<span style="color:hotwhite;">•</span>',
    typing: function (elm, chr) {
        chr.match(/\-trigger/) && $("#pow-txt").show().delay(500).fadeOut(0)
    }
});
var loader = document.querySelector(".for-center");

function opaxy() {
    loader.classList.add("opaxy")
}
window.addEventListener("load", opaxy);