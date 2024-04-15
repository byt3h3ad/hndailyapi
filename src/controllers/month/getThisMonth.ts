import type { Request, Response } from "express";
import fetchMonthData from "../../utils/fetchMonthData.js";

export const getThisMonth = async (req: Request, res: Response) => {
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 1);
	const year = yesterday.getUTCFullYear();
	const month = (yesterday.getUTCMonth() + 1).toString().padStart(2, "0");
	res.status(200).json(await fetchMonthData(`${year}-${month}`));
};
