var logo = document.getElementById("logo");

function toggleTheme() {
    if(logo.src.match("light")) {
        logo.src = "img/darkmode.png";
    } else {
        logo.src = "img/lightmode.png";
    }
}

function subscribe() {
    var x = document.getElementById("subscribe");

    if (x.getAttribute == "id", "subscribe") {
        x.removeAttribute("id");
        x.removeAttribute("onclick")
        x.innerHTML = "Subscribed";
        x.setAttribute("id","subscribe-clicked");
        x.setAttribute("onclick", "subscribed()");
    }
}

function subscribed() {
    var x = document.getElementById("subscribe-clicked");
    
    if (x.getAttribute == "id", "subscribe") {
        x.removeAttribute("id");
        x.removeAttribute("onclick")
        x.innerHTML = "Subscribe";
        x.setAttribute("id","subscribe");
        x.setAttribute("onclick", "subscribe()");
    }
}