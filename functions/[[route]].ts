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

  // Force index.html for root domain, regardless of path
  if (url.hostname === "rahul-yadav.com.np") {
    try {
      // Always serve index.html for the root domain
      const response = await env.ASSETS.fetch(
        new Request(`${url.origin}/index.html`)
      );

      // Create a new response with strict headers
      return new Response(response.body, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
        },
      });
    } catch (error) {
      console.error("Error serving index.html:", error);
      // Return a 500 error if we can't serve index.html
      return new Response("Error serving index.html", {
        status: 500,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
        },
      });
    }
  }

  // For all other domains, pass through to Next.js
  return env.ASSETS.fetch(context.request);
}
