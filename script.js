const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Software Engineer";
    }, 0);
    setTimeout(() => {
        text.textContent = "IOS Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Java Developer";
    }, 8000);
    setTimeout(() => {
        text.textContent = "AppLord";
    }, 12000);
}
textLoad();
setInterval(textLoad, 16000);