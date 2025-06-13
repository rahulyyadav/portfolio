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
    try {
      const response = await context.env.ASSETS.fetch(
        new Request(url.origin + "/index.html")
      );
      if (response.status === 200) {
        return new Response(response.body, {
          headers: {
            "content-type": "text/html",
            ...response.headers,
          },
        });
      }
    } catch (e) {
      console.error("Error serving index.html:", e);
    }
  }

  // For all other paths, forward to the Next.js application
  // This includes /other and all Next.js routes
  return context.env.ASSETS.fetch(context.request);
}
