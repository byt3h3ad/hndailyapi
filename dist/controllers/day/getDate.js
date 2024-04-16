import fetchDayData from "../../utils/fetchDayData.js";
export const getDate = async (req, res) => {
    res.status(200).json(await fetchDayData(req.params.date || ""));
};
//# sourceMappingURL=getDate.js.map