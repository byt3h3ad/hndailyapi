import express from "express";
import helmet from "helmet";
import Day from "./routers/day.js";

const app = express();
const port = 3000;
app.use(helmet());

app.use("/", Day);
app.get("*", (req, res) => {
	res.status(404).send("404 Not Found");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
