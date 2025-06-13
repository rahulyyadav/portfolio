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

  // Only handle root path
  if (pathname === "/" || pathname === "") {
    return context.env.ASSETS.fetch(new Request(url.origin + "/index.html"));
  }

  // For everything else, just pass through
  return context.env.ASSETS.fetch(context.request);
}
