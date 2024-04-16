const fetchDayData = async (date) => {
	const url = `https://www.daemonology.net/hn-daily/${date}.html`;
	const response = await fetch(url);
	const data = await response.text();
	return data;
};
console.log(fetchDayData("2024-04-12"));
export {};
//# sourceMappingURL=index.js.map
