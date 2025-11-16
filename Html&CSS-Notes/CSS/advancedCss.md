# What is SCSS?
- Sassy CSS which is a preprocessor syntax for SASS.
- It provides more modular, maitainable and reusable CSS which normal CSS does not have
- It provides
 - variables = $primary-color:#hidcj
 - nested CSS = {nav { ul { li { p { color: $primary-color}}}}}
 - mixins = @ mixin divCenter {display:flex, align-items:center, justify-content:center}
             .box{ @include divCenter}
 - Partials & Imports to break CSS into smaller files.
 - Inheritance using @extend.

# Diffference between TailwindCSS and Bootstrap
| Feature            | **TailwindCSS**                                | **Bootstrap**                                       |
| ------------------ | ---------------------------------------------- | --------------------------------------------------- |
| **Type**           | Utility-first CSS framework                    | Component-based CSS framework                       |
| **Styling**        | Gives utility classes; you design from scratch | Provides pre-built UI components                    |
| **Customization**  | Highly customizable                            | Customization requires overriding styles            |
| **Design Freedom** | Very flexible, no predefined design            | Has a consistent predefined look (“Bootstrap look”) |
| **Bundle Size**    | Usually **smaller** after purge                | Larger by default                                   |
| **Learning Curve** | Need to know CSS to use effectively            | Easy to use out-of-the box components               |


# How TailwindCSS converted into normal CSS
Tailwind uses PostCSS to scan my code, extract used classes, and generate the final optimized CSS. The browser only sees normal CSS, Tailwind is just the build process

# Critical CSS

- Critical CSS is the minimum CSS required to render the first visible part of the page. So that initial render will be fast and rest of the CSS will be load later.

* Because the browser stops rendering until the CSS is downloaded and parsed
- It improves the:
 - LCP (Largest Contentful Paint)
 - FCP (First Contentful Paint)
 - Better User Experience
 - Page Load Time
 - SEO

- Next.js automatically extracts critical CSS during SSR and inline it inside head tag browser doesn't need to fetch an external stylesheet and the rest load lazily.

- In React we have to install some plugins like critters, penthouse.