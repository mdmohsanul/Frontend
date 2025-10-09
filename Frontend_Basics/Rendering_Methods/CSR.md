## Client Side Rendering

1️⃣ Initial Request → The browser requests a page from the server.
2️⃣ Server Response → The server sends back a very minimal index.html file (usually just a <div id="root"></div> and links to JS/CSS).
3️⃣ JavaScript Download → The browser downloads the JavaScript bundle (React, Vue, Angular, etc.).
4️⃣ Rendering in Browser → The JavaScript runs, builds the UI, and injects the components into the root <div>.
5️⃣ User Sees the Page → Finally, the fully rendered UI appears.

** CSR became popular for SPA's and everyone was using it.

⚡ Key point: In CSR, the server does not send pre-rendered HTML. The browser (client) is responsible for rendering the page after loading the JavaScript.

Pros: Rich interactivity, fast navigation after load.
Cons: 
- Slower initial load. (Performance)
 Your browser (the client) has to do everything: fetch data, build the UI, make everything interactive  .. that's lot of work

Users often end up starting at a blank screen or a loading spinner while all this happens.

- SEO 
When search engines crawls your site, they're mainly looking at HTML content. But with CSR, your initial HTML is basically just an empty div- not great for search engines trying to figure out what your page is about.
When  you have a lot of nested components making API calls, the meaningful content might load too slow for search engines to even catch it.


