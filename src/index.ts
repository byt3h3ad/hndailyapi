import express from "express";
import helmet from "helmet";
import Day from "./routers/day.js";
import Month from "./routers/month.js";

const app = express();
const port = 3000;
app.use(helmet());

app.use("/month", Month);

app.use("/day", Day);

app.get("/", (req, res) => {
	res.status(200).sendFile("index.html", { root: "./public" });
});

app.get("*", (req, res) => {
	res.status(404).send("404 Not Found");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
