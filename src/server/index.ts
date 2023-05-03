import express, { Express, Request, Response } from "express";
import { config } from "./config/";
import { render } from "./render";
import axios from "axios";

const app: Express = express();

app.use(express.static('dist'));

app.get('/', (request: Request, response: Response) => {
  response.send(render(request.url));
});

app.get('/galaxias', async (request: Request, response: Response) => {
  try {
    const { data } = await axios.get('https://images-api.nasa.gov/search?q=galaxies');
    const initialProps = {
      galaxies: data?.collection?.items
    }
    response.send(render(request.url, initialProps));
  } catch (error) {
    throw new Error('An error ocurred in /galaxies', error);
  }
});

app.get('*', (request: Request, response: Response) => {
  response.send(`<h1>Hello world from ${request.url}</h1>`);
});

app.listen(config.PORT, () => {
  console.log(`listening in http://localhost:${config.PORT}`);
});