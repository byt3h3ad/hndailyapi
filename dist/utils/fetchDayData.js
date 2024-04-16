import * as cheerio from "cheerio";
const fetchDayData = async (date) => {
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
//# sourceMappingURL=fetchDayData.js.map