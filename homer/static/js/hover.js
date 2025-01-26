function onHover(e) {
    e.target.classList.add("hover");
    var ul = e.target.querySelector("ul:first-of-type");
    ul && ul.classList.remove("hidden");
}
function offHover(e) {
    e.target.classList.remove("hover");
    var ul = e.target.querySelector("ul:first-of-type");
    ul && ul.classList.add("hidden");
}