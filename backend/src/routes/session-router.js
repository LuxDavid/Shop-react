import { Router } from "express";
import { login, authorization } from "../controllers/session_controller.js";
import { authToken } from "../middlewares/middlewares.js";

const router= Router();

router.post('/login', login);

router.get("/current", authToken ,authorization);



export default router