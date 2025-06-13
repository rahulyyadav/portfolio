interface Env {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
}

interface Context {
  request: Request;
  params: { route?: string[] };
}

export async function onRequest(context: Context, env: Env): Promise<Response> {
  const url = new URL(context.request.url);

  // If it's the root path, serve index.html
  if (url.pathname === "/") {
    return env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
  }

  // For everything else, pass through
  return env.ASSETS.fetch(context.request);
}
