import { Router } from "express";
import { getDate } from "../controllers/day/getDate.js";
import { getToday } from "../controllers/day/getToday.js";
const Day = Router();
Day.get("/:date", getDate);
Day.get("/", getToday);
export default Day;
//# sourceMappingURL=day.js.map
