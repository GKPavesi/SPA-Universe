class Routes {

    routes = {}
    backgroundImages = {}

    addRoutes(routePath, routeLink) {
        this.routes[routePath] = routeLink;
    }

    addBackgroundImage(backgroundPath, backgroundLink) {
        this.backgroundImages[backgroundPath] = backgroundLink;
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
    
        let { pathname } = event.target;
        window.history.pushState({}, "", pathname);
    
        this.handleRouteEvent();
    }

    handleRouteEvent() {
        let app = document.querySelector("#app");
        let { pathname } = window.location
        let route = this.routes[pathname] || this.routes[404];
    
    
        fetch(route)
            .then(data => data.text())
            .then(html => {
                this.changeBackgroundImage(pathname);
                app.innerHTML = html;
            })
    }

    changeBackgroundImage(pathname) {
        let newImageUrl = this.backgroundImages[pathname];
        let body = document.querySelector("body");
    
        const image = new Image();
        image.src = newImageUrl;
    
        image.onload = function () {
            body.style.backgroundImage = `url(${newImageUrl})`;
        }
    }
}

export { Routes }