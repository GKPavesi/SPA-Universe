const routes = {
    "/": "/Pages/page1.html",
    "/theuniverse": "/Pages/page2.html",
    "/exploration": "/Pages/page3.html",
    404: "/Pages/404.html"
}

const backgroundImages = {
    "/": "/Assets/img/background1.png",
    "/theuniverse": "/Assets/img/background2.png",
    "/exploration": "/Assets/img/background3.png",
    404: "/Assets/img/background1.png"
}

function route(event) {
    event = event || window.event;
    event.preventDefault();

    let { pathname } = event.target;
    window.history.pushState({}, "", pathname);

    handleRouteEvent();
}

function handleRouteEvent() {
    let app = document.querySelector("#app");
    let { pathname } = window.location
    let route = routes[pathname] || routes[404];


    fetch(route)
        .then(data => data.text())
        .then(html => {
            changeBackgroundImage(pathname);
            app.innerHTML = html;
        })
}

function changeBackgroundImage(pathname) {
    let newImageUrl = backgroundImages[pathname];
    let body = document.querySelector("body");

    const image = new Image();
    image.src = newImageUrl;

    image.onload = function () {
        body.style.backgroundImage = `url(${newImageUrl})`;
    }
}

handleRouteEvent()

window.route = () => route();