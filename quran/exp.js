let hi = "hi";

function loading(words) {
    const setTime = setInterval(() => {
        words += ".";
        document.body.innerText = hi;
    }, 400);

    setTimeout(() => {
        clearInterval(setTime);
    }, 2000);
}

const setTime = setInterval(() => {
    hi += ".";
    document.body.innerText = hi;
}, 400);

setTimeout(() => {
    clearInterval(setTime);
}, 4000);
