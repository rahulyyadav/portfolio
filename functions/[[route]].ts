interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

interface Context {
  request: Request;
  params: { route?: string[] };
  env: Env;
}

export async function onRequest(context: Context): Promise<Response> {
  const url = new URL(context.request.url);

  // If it's the root path, serve index.html
  if (url.pathname === "/") {
    return context.env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
  }

  // For everything else, pass through
  return context.env.ASSETS.fetch(context.request);
}
