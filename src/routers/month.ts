import { Router } from "express";
import { getMonth } from "../controllers/month/getMonth.js";
import { getThisMonth } from "../controllers/month/getThisMonth.js";

const Month = Router();

Month.get("/:month", getMonth);
Month.get("/", getThisMonth);

export default Month;
