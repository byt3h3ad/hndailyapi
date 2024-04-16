import type { Request, Response } from "express";
import fetchMonthData from "../../utils/fetchMonthData.js";

const validateMonth = (date: string) => {
	const dateRegex = /^\d{4}-\d{2}$/;
	return dateRegex.test(date);
};

const checker = (dateString: string) => {
	const [year, month] = dateString.split("-");
	return (
		Number.parseInt(year || "") < 2010 ||
		Number.parseInt(year || "") > new Date().getUTCFullYear() ||
		Number.parseInt(month || "") < 1 ||
		Number.parseInt(month || "") > 12 ||
		(Number.parseInt(year || "") === new Date().getUTCFullYear() &&
			Number.parseInt(month || "") > new Date().getUTCMonth() + 1) ||
		(Number.parseInt(year || "") === 2010 && Number.parseInt(month || "") < 7)
	);
};

export const getMonth = async (req: Request, res: Response) => {
	if (!req.params.month || !validateMonth(req.params.month)) {
		return res.status(400).json({ error: "Invalid params - stick to YYYY-MM form." });
	}
	if (checker(req.params.month)) {
		return res
			.status(404)
			.json({
				error: "Input should be between 2010-07 and the current month in YYYY-MM form.",
			});
	}
	res.status(200).json(await fetchMonthData(req.params.month));
};
