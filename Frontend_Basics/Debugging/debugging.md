# Development Debugging

1. Browser/Chrome DevTools (Your #1 tool)

Every React developer uses Chrome DevTools daily.

🔍 Tools we use:

✔ Console - View logs (console.log, console.error)
Check variable values
Confirm async flows

✔ Sources → Breakpoints

Stops the code execution so you can inspect:

Variables at that line
Call stack
Closures
Event handlers
Async breakpoints

Types of breakpoints:

Line breakpoints
Conditional breakpoints
Event listener breakpoints
XHR/fetch breakpoints
DOM mutation breakpoints

Condition example:
if (user.id === 42) debugger;


or
Chrome: right-click → “Add conditional breakpoint”.

✔ Network tab

To debug API issues:

Check request URL, headers, tokens
Check network errors (404, 401, 500)
Verify backend response structure
Check request/response timing

✔ Application tab

Debug:

LocalStorage
SessionStorage
Cookies
IndexedDB
Service workers
JWT tokens

✔ Performance tab

Used when the app is slow:
Identify re-renders
Pinpoint slow API calls
Check large JS bundle
CPU bottlenecks

⚛️ 2. React Developer Tools Extension

Most useful React debugging tool.

You can:

Inspect components and props
Inspect Redux state
See re-renders (highlight updates)
Check component tree
Validate memoization issues
Check performance profiling

Performance Profiler (inside React DevTools)
Shows which components re-rendered and why.

💥 3. Debugging React Code in VS Code

Set breakpoints directly in VS Code and debug inside the editor.

VS Code debugger
Chrome Debugging Extension
debugger; keyword

Example:
function handler() {
  debugger; // stops execution
}

🐞 4. Debugging Redux (Production-grade)
Tools:

Redux DevTools
Action logger
Time-travel debugging
Inspect dispatched actions
Inspect state diffs
Verify slice mutations

Debug in production:

Add logging middleware (only in development)
Capture Redux errors with Sentry or LogRocket

🔗 5. Logging Tools for Production

Frontend debugging in production uses monitoring tools:

Real product debugging uses:
Sentry → error tracking with stack traces
LogRocket → session replay + network logs
Datadog → performance monitoring
New Relic → frontend monitoring
TrackJS → JavaScript error tracking

These tools show:

Errors + stack trace
User device, browser
API response

User behavior (video replay)

Production debugging ≠ console.log
You use advanced monitoring tools.

🧵 6. API debugging (when backend issues)

Use tools like:

Postman
Thunder Client
Curl
Swagger UI
Network panel

Check:

Status codes
Headers
Tokens
Query params
Authorization issues

🧩 7. Component Re-render debugging

Use:

React DevTools “Trace Updates”
Why Did You Render (WDYR) library
Profiler tab

Common bugs:

Infinite re-render
Passing props incorrectly
Unnecessary re-renders

🧪 8. Debug using Test Tools

When writing tests:

Jest error logs
React Testing Library debugging output
Snapshot diffs

🔒 9. Debugging Production Bundles

When minified code errors happen:
Use source maps
Sentry integrates source maps
Chrome DevTools rewrites minified code back to the original

🔥 Final Summary (How real devs debug)

In development:
Console logs
Chrome DevTools breakpoints
React DevTools
Network tab
VS Code debugger
Redux DevTools

In production:

Sentry / LogRocket
Source maps
Real user session replay
Network logs
Monitoring dashboards (Datadog, New Relic)