import express, { Express, Request, Response } from "express";
import { config } from "./config/";
import { render } from "./render";

const app: Express = express();

app.use(express.static('dist'));

app.get('/', (request: Request, response: Response) => {
  response.send(render(request.url));
});

app.get('*', (request: Request, response: Response) => {
  response.send(`<h1>Hello world from ${request.url}</h1>`);
});

app.listen(config.PORT, () => {
  console.log(`listening in http://localhost:${config.PORT}`);
});