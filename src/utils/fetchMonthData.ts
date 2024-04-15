import * as cheerio from "cheerio";

type Link = {
	title: string | undefined;
	link: string | undefined;
	comments: string | undefined;
};

type MonthData = {
	heading: string;
	links: Link[];
};

const fetchMonthData = async (month: string): Promise<MonthData> => {
	const url = `https://www.daemonology.net/hn-daily/${month}.html`;
	const data = await (await fetch(url)).text();
	const $ = cheerio.load(data);
	const monthHeading = `Daily Hacker News for ${month}`;
	const links = $(".content")
		.map((i, el) => {
			const $el = $(el);
			const days = $el
				.find("ul li")
				.map((_, el) => {
					const $link = $(el).find(".storylink > a");
					const link = $link.attr("href");
					const title = $link.text();
					const comments = $(el).find(".postlink > a").attr("href");
					return { title, link, comments };
				})
				.get();
			return days;
		})
		.get();
	return { heading: monthHeading, links: links };
};

export default fetchMonthData;
