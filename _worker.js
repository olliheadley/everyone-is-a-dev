export default {
    async fetch(request, env) {
      const url = new URL(request.url)
      if (url.pathname.startsWith("/static/")) {
        // Serve static assets from the build output
        return env.ASSETS.fetch(request)
      }
  
      // Otherwise, serve the index page
      return env.ASSETS.fetch(`${url.origin}/index.html`)
    },
  }
  
  