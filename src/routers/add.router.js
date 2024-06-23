import { Router } from "express";
import { all, routerAdd, routerDelete, routerGet, routerUpdate } from "../controllers/router.controllers.js";

const router = Router();
router.get('/get/:id',routerGet);
router.post("/add",routerAdd);
router.delete("/delete/:id",routerDelete)
router.patch("/update/:id",routerUpdate)
router.get("/",all)
export default router;