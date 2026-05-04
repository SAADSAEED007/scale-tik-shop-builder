// Minimal Cloudflare Worker for serving Vite React SPA
export default {
  async fetch(request: Request, env: Record<string, unknown>): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Try to fetch the requested file
    let response = await env.ASSETS.fetch(request);

    // If not found and it's not an asset, serve index.html (SPA routing)
    if (response.status === 404 && !pathname.match(/\.(js|css|json|png|jpg|svg|woff|woff2)$/)) {
      response = await env.ASSETS.fetch(new Request(new URL("/index.html", url).toString(), request));
    }

    return response;
  },
} as ExportedHandler;
