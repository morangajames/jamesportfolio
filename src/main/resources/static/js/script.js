// Loading animations
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.load-Wrapper').style.opacity = "0";

            setTimeout(() => {
                document.querySelector('.load-Wrapper').style.display = "none";
            },500);
    },2000);
});
