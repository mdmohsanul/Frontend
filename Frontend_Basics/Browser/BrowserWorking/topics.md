# Critical rendering path?

- It is the sequence of steps the browser takes to convert the HTML, CSS, and JS code into pixels on the screen.

1. Parse HTML → DOM
2. Parse CSS → CSSOM
3. Combine DOM + CSSOM → Render Tree
4. Layout (Reflow)
5. Paint (Repaint)

Goal: Minimize CRP to make page load faster.

# Difference between Reflow and Repaint

# What is DOM and CSSOM?

DOM (Document Object Model): Representation of HTML as a tree.
CSSOM (CSS Object Model): Representation of CSS rules as a tree.

Render Tree = DOM + CSSOM but only includes visible elements.

# Preload and Prefetch

| Term       | When Loaded | Purpose                         |
| ---------- | ----------- | ------------------------------- |
| `preload`  | Immediately | Critical resources (fonts, CSS) |
| `prefetch` | Idle time   | Future navigation resources     |

<link rel="preload" href="style.css" as="style" />
<link rel="prefetch" href="next-page.js" />


