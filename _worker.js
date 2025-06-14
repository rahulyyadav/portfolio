export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Serve the static landing page at root
    if (url.pathname === "/" || url.pathname === "/index.html") {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url)));
    }

    // For all other routes, serve the default React entrypoint (Next.js app shell)
    return env.ASSETS.fetch(new Request(new URL("/index.html", request.url)));
  },
};
