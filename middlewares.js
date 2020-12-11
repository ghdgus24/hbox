import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = "HBOX";
	res.locals.routes = routes;
	next();
};
