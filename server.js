const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    let { pathname } = parsedUrl;

    // If it's the root path and direct access, serve index.html
    if (pathname === "/" && !req.headers.referer) {
      const filePath = path.join(__dirname, "public", "index.html");
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error loading index.html");
          return;
        }
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      });
      return;
    }

    // If it's /other, show the main Next.js page
    if (pathname === "/other") {
      pathname = "/";
    }

    // For all other paths, let Next.js handle it
    handle(req, res, { ...parsedUrl, pathname });
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
    console.log("> Exact root path (/) will serve index.html");
    console.log("> /other will serve the main Next.js page");
    console.log("> All other paths will serve their respective Next.js pages");
  });
});
