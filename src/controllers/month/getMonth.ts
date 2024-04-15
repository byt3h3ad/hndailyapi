import type { Request, Response } from "express";
import fetchMonthData from "../../utils/fetchMonthData.js";

export const getMonth = async (req: Request, res: Response) => {
	res.status(200).json(await fetchMonthData(req.params.month || ""));
};
