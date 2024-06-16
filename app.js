const achievements = document.querySelectorAll(".main .container .achievement div");
const close = document.querySelector(".main .container .achievement span");

achievements.forEach((achievement) => {
    const img = achievement.querySelector("img");
    const button = achievement.querySelector("input");

    button.addEventListener('click', () => {
        img.style.display = 'block';
        close.style.display = 'block';
    });

    close.addEventListener('click', () => {
        img.style.display = 'none';
        close.style.display = 'none';
    })
});