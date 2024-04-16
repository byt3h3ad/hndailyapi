import fetchMonthData from "../../utils/fetchMonthData.js";
export const getMonth = async (req, res) => {
    res.status(200).json(await fetchMonthData(req.params.month || ""));
};
//# sourceMappingURL=getMonth.js.map