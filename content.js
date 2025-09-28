(function() {
    document.addEventListener("wheel", function(event) {
        if (event.deltaY < 0) {
            let btn = document.getElementById("m-1f");
            if (btn) btn.click();
        } else if (event.deltaY > 0) {
            let btn = document.getElementById("p-1f");
            if (btn) btn.click();
        }
    }, { passive: true });
})();
