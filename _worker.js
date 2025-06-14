export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // If it's /other, serve the Next.js landing page
    if (url.pathname === "/other" || url.pathname === "/other/") {
      return env.ASSETS.fetch(new Request(new URL("/", request.url)));
    }

    // For all other paths, serve index.html
    return env.ASSETS.fetch(new Request(new URL("/index.html", request.url)));
  },
};
