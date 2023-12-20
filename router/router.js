class Router {
	constructor() {
		this.routes = {};
	}

	addRoute(path, handler) {
		this.routes[path] = handler;
	}

	navigate(path) {
		if (this.routes.hasOwnProperty(path)) {
			const handler = this.routes[path];
			handler();
		} else {
			console.log("Route not found");
		}
	}
}


const router = new Router();

router.addRoute("/", () => {
	console.log("Home page");
});

router.addRoute("/about", () => {
	console.log("About page");
});

router.navigate("/");
router.navigate("/about");
router.navigate("/contact"); 
