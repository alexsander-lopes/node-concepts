import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
    return res.send("Olá mundo!");
});

router.post("/add", (req, res) => {
    console.log(req.body);
    return res.status(StatusCodes.CREATED).json(req.body);
});

export { router };
