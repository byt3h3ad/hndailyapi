import * as cheerio from "cheerio";

type Link = {
	title: string | undefined;
	link: string | undefined;
	comments: string | undefined;
};

type DayData = {
	heading: string;
	links: Link[];
};

const fetchDayData = async (date: string): Promise<DayData> => {
	const url = `https://www.daemonology.net/hn-daily/${date}.html`;
	const data = await (await fetch(url)).text();
	const $ = cheerio.load(data);
	const heading = $(".content h2").text();
	const links = $(".content ul")
		.eq(0)
		.find("li")
		.map((_, el) => {
			const $link = $(el).find(".storylink > a");
			const link = $link.attr("href");
			const title = $link.text();
			const comments = $(el).find(".postlink > a").attr("href");
			return { title, link, comments };
		})
		.get();
	return { heading, links };
};

export default fetchDayData;
