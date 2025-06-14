export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // For all paths, serve index.html
    return env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
  },
};
