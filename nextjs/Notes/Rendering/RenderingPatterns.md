# Rendering - When and Where our UI is generated

# Rendering Pattern defines whether your HTML is generated on client, server or build time

# Modern React apps just don't run on browser
- SEO Friendly
- Fast to load
- Efficient on slow networks
- Scalable to million users

# Four Rendering process
- CSR -> Client Side Rendering
- SSR -> Server Side Rendering
- SSG -> Static Site Generation
- ISG -> Incremental Site Generation

# Client Side Rendering
- Browser Load Blank HTML page with Javascript Bundle
- Browser fetch and execute the Javascript (make API calls and interactivity)
- UI appears

* PROS
- Rich interactivity
- Fast Development
- Great for Dashboards / Internal dashboard

* CONS
- Bad SEO
- Slow First Contentful Paint
- JS bundle blocking

# Server Side Rendering
- HTML is generated on server per request, then hydrate on client.

* PROS
- Good for SEO
- Faster First Paint
- Secure - API keys stay on server

* CONS
- Still we depend on browser to hydrate

* Good for
- Dynamic pages -> where we need updated data on every request

# Static Site Generation
- HTML generated at build time not per request

Perfect for: Blogs, Docs, Marketing Pages

* PROS
- Ultra fast, CDN cached, zero server cost
- Requires Build to update content

# Incremental Static Regenration

- ISR =  SSG + background updates
- In this also HTML is generated on build time but we can rebuilt in background after a setInterval so we don't manually build it

* CONS
- Slight delay before new content appears
