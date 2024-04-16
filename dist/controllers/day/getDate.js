import fetchDayData from "../../utils/fetchDayData.js";
const validateDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
};
const checker = (dateString) => {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setUTCDate(today.getUTCDate() - 1);
    console.log(today);
    console.log(inputDate);
    console.log(today <= inputDate);
    const cutoffDate = new Date("2010-07-11");
    return inputDate >= cutoffDate && inputDate <= today;
};
export const getDate = async (req, res) => {
    if (!req.params.date || !validateDate(req.params.date)) {
        return res.status(400).json({ error: "Invalid params - stick to YYYY-MM-DD format." });
    }
    if (!checker(req.params.date)) {
        return res
            .status(404)
            .json({ error: "Input should be between yesterday and 2010-07-11 in YYYY-MM-DD format." });
    }
    res.status(200).json(await fetchDayData(req.params.date));
};
//# sourceMappingURL=getDate.js.map