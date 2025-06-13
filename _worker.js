export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // If it's the root path, serve index.html
    if (url.pathname === "/") {
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
    }

    // For everything else, pass through
    return env.ASSETS.fetch(request);
  },
};
