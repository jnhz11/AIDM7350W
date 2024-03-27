if (window.innerWidth <= 1180) {
    document.querySelectorAll(".tab_tit > h2").forEach(function (h2) {
        h2.style.display = "none";
    });
} else {
    document.querySelectorAll(".tab_tit > h2").forEach(function (h2) {
        h2.style.display = "block";
    });
}

window.addEventListener("resize", function () {
    var width = window.innerWidth;
    if (width <= 1180) {
        document.querySelectorAll(".tab_tit > h2").forEach(function (h2) {
            h2.style.display = "none";
        });
    } else {
        document.querySelectorAll(".tab_tit > h2").forEach(function (h2) {
            h2.style.display = "block";
        });
    }
});
