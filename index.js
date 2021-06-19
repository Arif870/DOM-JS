function $(s) {
    return document.querySelector(s);
}

let myh1 = document.getElementById("myh1");

myh1.style.textAlign = "center";

let h1 = $("h1");

let pStyles = {
    color: "gray",
    textAlign: "center",
    lineHeight: "25px",
};
Object.assign($("p").style, pStyles);

let h1Styles = {
    color: "salmon",
    textAlign: "center",
    background: "black",
    padding: "10px",
};
Object.assign(h1.style, h1Styles);

function $(s) {
    return document.querySelector(s);
}

let myh1 = document.getElementById("myh1");

myh1.style.textAlign = "center";

let h1 = $("h1");

let pStyles = {
    color: "gray",
    textAlign: "center",
    lineHeight: "25px",
    visibility: "hidden",
};
Object.assign($("p").style, pStyles);

let h1Styles = {
    color: "salmon",
    textAlign: "center",
    background: "black",
    padding: "10px",
};
Object.assign(h1.style, h1Styles);

let btn = document.querySelector("#btn");
let pera = document.querySelector("#para");
let isShown = false;
btn.addEventListener("click", function() {
    if (isShown) {
        pera.style.visibility = "hidden";
        btn.innerHTML = "Show";
        isShown = false;
    } else {
        pera.style.visibility = "visible";
        btn.innerHTML = "Hide";
        isShown = true;
    }
});
