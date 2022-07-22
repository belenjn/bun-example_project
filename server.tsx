import { renderToString } from "react-dom/server";
import { App } from "./App";

export default {
  port: 3000,
  fetch(request: Request) {
    const { url, method } = request;

    const { pathname } = new URL(url);

    if (pathname === "/" && method === "GET") {
      return new Response(`<div id='app'>
      ${renderToString(<App/>)}
      </div>`, {
        status: 200,
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    if (pathname === "/users" && method === "GET") {
      return new Response(
        JSON.stringify([
          { name: "belen" },
          { name: "lola" },
          { name: "noelia" },
          { name: "monica" },
        ]),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response("", {
      status: 404,
    });
  },
};
