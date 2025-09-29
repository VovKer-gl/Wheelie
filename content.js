(function() {
    let isMouseOverGameEventsContainer = false;

    const gameEventsContainer = document.querySelector(".game-events-container");

    if (gameEventsContainer) {
        gameEventsContainer.addEventListener("mouseenter", function() {
            isMouseOverGameEventsContainer = true;
        });

        gameEventsContainer.addEventListener("mouseleave", function() {
            isMouseOverGameEventsContainer = false;
        });
    }

    document.addEventListener("wheel", function(event) {
        if (!isMouseOverGameEventsContainer) {
            event.preventDefault();

            // Ваша логіка для кнопок m-1f та p-1f
            if (event.shiftKey) {
                if (event.deltaY < 0) {
                    let btn = document.getElementById("m-1s");
                    if (btn) btn.click();
                } else if (event.deltaY > 0) {
                    let btn = document.getElementById("p-1s");
                    if (btn) btn.click();
                }
                return;
            }

            if (event.deltaY < 0) {
                let btn = document.getElementById("m-1f");
                if (btn) btn.click();
            } else if (event.deltaY > 0) {
                let btn = document.getElementById("p-1f");
                if (btn) btn.click();
            }
        }
    }, { passive: false });

    document.addEventListener("mousedown", function(event) {
        if (event.shiftKey) {
            if (event.button === 3) {
                let btn = document.getElementById("m-1s");
                if (btn) btn.click();
                event.preventDefault();
            } else if (event.button === 4) {
                let btn = document.getElementById("p-1s");
                if (btn) btn.click();
                event.preventDefault();
            }
        } else {
            if (event.button === 3) {
                let btn = document.getElementById("m-1f");
                if (btn) btn.click();
                event.preventDefault();
            } else if (event.button === 4) {
                let btn = document.getElementById("p-1f");
                if (btn) btn.click();
                event.preventDefault();
            }
        }
    });

    document.body.style.overflow = 'hidden';
})();