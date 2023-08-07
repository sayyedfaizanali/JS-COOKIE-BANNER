let modal = document.querySelector(".modal");
let clear = document.querySelector(".close");
let btn = document.querySelector(".myBtn");

function checkCookie() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        if (cookie.indexOf("dismissed=") === 0) {
            return true;
        }
    }
}
function setCookie() {
    document.cookie = "dismissed=true;";
}
btn.addEventListener('click', function () {
    if (!checkCookie()) {
        modal.style.display = "block";
    }
});
clear.addEventListener('click', function () {
    modal.style.display = "none";
    setCookie();
});
