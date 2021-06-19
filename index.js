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