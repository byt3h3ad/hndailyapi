<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/en/b/bf/Hackernews_logo.png" alt="Hackernews logo.png" height="48" width="257" />
    <h2 align="center">Hacker News Daily API</h2>
    <h4 align="center">REST API built with TypeScript and Express for <a href="https://www.daemonology.net/hn-daily/">HN Daily></a><h4>
</p>

If it is not yet obvious, I am obviously a [Hacker News](https://news.ycombinator.com/) addict. I regularly visit the site to get my daily dose of dopamine. [HN Daily](https://www.daemonology.net/hn-daily/) gives the daily top stories from Hacker News. These are nicely sorted by day, month, as well as year. This is my attempt to create a simple Express web application using TypeScript so that building bots or frontends for this will be simpler.





## API Reference

#### Get today

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `none` | `none` | Defaults to show today's top stories |

#### Get specific date

```http
  GET /date/${date}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `date`      | `string` | **Required**. Date in YYYY-MM-DD format. |


## Run Locally

Clone the project

```bash
  git clone https://github.com/byt3h3ad/hndailyapi.git
```

Go to the project directory

```bash
  cd hndailyapi
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```


## Roadmap

- Add month support

- Add year support (?)


## Tech Stack

ExpressJS, Typescript.

[Cheerio](https://github.com/cheeriojs/cheerio) for manipulating and parsing HTML documents. 


## Usage/Examples

```http
GET /date/2024-04-14
```


