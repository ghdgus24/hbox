import express from "express";
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

// global
// get 함수 앞의 인자 routes.home은 URL 주소, 뒤에 인자 home은 res.send 함수
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);


// user
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
