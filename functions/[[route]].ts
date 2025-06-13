interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

interface Context {
  request: Request;
  env: Env;
}

export async function onRequest(context: Context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // If it's the root path, serve index.html
  if (pathname === "/" || pathname === "") {
    return context.env.ASSETS.fetch(new Request(url.origin + "/index.html"));
  }

  // For all other paths, forward to the Next.js application
  return context.env.ASSETS.fetch(context.request);
}
