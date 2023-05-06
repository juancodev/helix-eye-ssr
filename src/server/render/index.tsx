import React from "react";
import { App } from "../../app/containers/App";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { template } from "./template";

const sheet = new ServerStyleSheet();
export const render = (url: string, initialProps = {}) => {
  try {
    const stream = renderToString(
      sheet.collectStyles(
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      )
    );

    const styleTags = sheet.getStyleTags();

    const html = template(stream, initialProps, styleTags);

    return html;
  } catch (error) {
    throw new Error("Error in render " + error);
  }
};
