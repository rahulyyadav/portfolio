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

  // If it's the root path, serve index.html
  if (url.pathname === "/" || url.pathname === "") {
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

  // For /other path, serve the Next.js app
  if (url.pathname === "/other") {
    return context.env.ASSETS.fetch(
      new Request(url.origin + "/_next/static/chunks/pages/other.js")
    );
  }

  // For all other paths, forward to the Next.js application
  return context.env.ASSETS.fetch(context.request);
}
