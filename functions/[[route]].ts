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
  const pathname = url.pathname;

  // Serve index.html for root path or empty path
  if (pathname === "/" || pathname === "") {
    try {
      const response = await env.ASSETS.fetch(
        new Request(`${url.origin}/index.html`)
      );
      return new Response(response.body, {
        headers: {
          "content-type": "text/html",
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      });
    } catch (error) {
      console.error("Error serving index.html:", error);
      return new Response("Error serving index.html", { status: 500 });
    }
  }

  // Forward all other requests to the Next.js app
  return env.ASSETS.fetch(context.request);
}
