const routes = {
    "/": "/Pages/page1.html",
    "/theuniverse": "/Pages/page2.html",
    "/exploration": "/Pages/page3.html",
    404: "/Pages/404.html"
}

function route(event) {
    event = event || window.event;
    event.preventDefault();

    handleRouteEvent();
}

function handleRouteEvent() {

}

window.route = () => route();