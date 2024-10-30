import fetchDayData from "../../utils/fetchDayData.js";
export const getToday = async (req, res) => {
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 1);
	const year = yesterday.getUTCFullYear();
	const month = (yesterday.getUTCMonth() + 1).toString().padStart(2, "0");
	const day = yesterday.getUTCDate().toString().padStart(2, "0");
	res.status(200).json(await fetchDayData(`${year}-${month}-${day}`));
};
//# sourceMappingURL=getToday.js.map
