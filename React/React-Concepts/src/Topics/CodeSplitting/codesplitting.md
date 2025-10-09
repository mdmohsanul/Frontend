# Code Splitting

- Code splitting is the process of breaking large javascript bundle into small chunks that are loaded when needed.
- Instead of shipping entire app upfront. user only download the code required for current route or feature.

- It reduces the initial bundle size, leading to faster initial load and better Core Web Vitals.
- Improves scalability as the app grows.

const Help = lazy(() => import("./))

path:"/help"
element:<Suspense fallback={<h1>Loading</h1>}><Help/></Suspense>

Best Practices:

Split large libraries (charts, editors) into async chunks.
Preload critical chunks when you know they’ll be needed soon (e.g., link rel="preload").
Monitor and analyze bundles with tools like Webpack Bundle Analyzer.

