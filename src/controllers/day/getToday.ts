import type { Request, Response } from "express";
import fetchDayData from "../../utils/fetchDayData.js";

export const getToday = async (req: Request, res: Response) => {
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 1);
	const year = yesterday.getFullYear();
	const month = (yesterday.getMonth() + 1).toString().padStart(2, "0");
	const day = yesterday.getDate().toString().padStart(2, "0");
	fetchDayData;
	res.status(200).json(await fetchDayData(`${year}-${month}-${day}`));
};
