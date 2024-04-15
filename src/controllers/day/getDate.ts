import type { Request, Response } from "express";
import fetchDayData from "../../utils/fetchDayData.js";

export const getDate = async (req: Request, res: Response) => {
	res.status(200).json(await fetchDayData(req.params.date || ""));
};
