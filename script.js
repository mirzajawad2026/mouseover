let div = document.querySelector("div");
window.addEventListener("mousemove", function (dts) {
    div.style.top = dts.clientY + "px";
    div.style.left = dts.clientX + "px";
    
});