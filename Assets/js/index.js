const routes = {
    "/": "/Pages/page1.html",
    "/theuniverse": "/Pages/page2.html",
    "/exploration": "/Pages/page3.html",
    404: "/Pages/404.html"
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
    let route = routes[pathname];

    fetch(route)
    .then(data => data.text())
    .then(html => {
        app.innerHTML = html;
    })
}

handleRouteEvent()

window.route = () => route();