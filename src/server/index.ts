import express, { Express, Request, Response } from "express";
import { config } from "./config/";
import { template } from './render/template';

const app: Express = express();

app.get('/', (request: Request, response: Response) => {
  response.send(template(`<h1>Hello world from: ${request.url}</h1>`));
});

app.get('*', (request: Request, response: Response) => {
  response.send(`<h1>Hello world from ${request.url}</h1>`);
});

app.listen(config.PORT, () => {
  console.log(`listening in http://localhost:${config.PORT}`);
});