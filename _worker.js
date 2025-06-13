export default {
  runtime: {
    nodejs: "18.18.0",
  },
  compatibility_flags: ["nodejs_compat"],
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // If it's the root path, serve index.html
    if (url.pathname === "/") {
      return env.ASSETS.fetch(new Request(url.origin + "/index.html"));
    }

    // For all other paths, forward to the Next.js application
    return env.ASSETS.fetch(request);
  },
};
