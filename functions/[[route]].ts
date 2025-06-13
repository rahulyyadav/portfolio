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

  // If it's the root path, serve index.html from the public directory
  if (url.pathname === "/") {
    try {
      // Try to serve from public directory first
      const response = await env.ASSETS.fetch(
        new Request(`${url.origin}/public/index.html`)
      );
      if (response.status === 200) {
        return response;
      }

      // If not found in public, try root
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
    } catch (error) {
      console.error("Error serving index.html:", error);
      return new Response("Error serving index.html", { status: 500 });
    }
  }

  // For everything else, pass through
  return env.ASSETS.fetch(context.request);
}
