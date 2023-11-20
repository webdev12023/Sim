document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('nightModeToggle');
    const body = document.body;

    nightModeToggle.addEventListener('click', function () {
        body.classList.toggle('night-mode');
    });
});
