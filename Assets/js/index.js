import { Routes } from "./routes.js";

const route = new Routes();

route.addRoutes("/", "/Pages/page1.html");
route.addRoutes("/theuniverse", "/Pages/page2.html");
route.addRoutes("/exploration", "/Pages/page3.html");
route.addRoutes(404, "/Pages/404.html");

route.addBackgroundImage("/", "/Assets/img/background1.png");
route.addBackgroundImage("/theuniverse", "/Assets/img/background2.png");
route.addBackgroundImage("/exploration", "/Assets/img/background3.png");
route.addBackgroundImage(404, "/Assets/img/background1.png");

route.handleRouteEvent()

window.route = () => route.route();