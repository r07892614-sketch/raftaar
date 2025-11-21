let time = 60;

// Redirect Link
const redirectURL = "https://t.me/+Lb4p2LfdXclkNzI1";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".join-btn").addEventListener("click", () => {
        window.location.href = redirectURL;
    });

    countdown();
});

function countdown() {
    const timer = document.getElementById("timer");
    timer.textContent = time;

    if (time > 0) {
        time--;
        setTimeout(countdown, 1000);
    }
}

