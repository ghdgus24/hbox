import express from "express";
import {
	getJoin,
	postJoin,
	logout,
	getLogin,
	postLogin,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

// global
// get 함수 앞의 인자 routes.home은 URL 주소, 뒤에 인자 home은 res.send 함수
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

// user
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

export default globalRouter;
