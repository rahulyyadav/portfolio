export default {
  async fetch(request, env, ctx) {
    return env.ASSETS.fetch(new Request(new URL("/index.html", request.url)));
  },
};
