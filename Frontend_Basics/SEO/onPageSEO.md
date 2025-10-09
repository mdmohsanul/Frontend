# For frontend Devs

1. Only 1 Per page (always try to keep these thing one so that google get to know that only to give preference on one h1 tag)
- h1
- title tag
- meta description
- main
- address
- header
- footer
- we can use these things multiple times inside <section> tag, it breaks our webpage in multiple pieces

2. Ensure <aside> is used for secondary content
- <aside> is for related content (e.g: sidebars, ads, related links).
It should not contain essential content

3. Avoid Nesting Interactive Elements (<a> inside <buttons>)
- Sometimes what we do is make the whole div clickable and inside that div there is also a button and by using stopPropagation() we are performing some actions which is bad practice.

eg: 
<button>
<a href="signup">Signup</a>  ❌WRONG
</button>

<div>
<button>
<a href="signup">Signup</a>  ❌WRONG
</button>
</div>

Best Practice: If our parent is clickable then our child will not clickable

4. Do not use <b> or <i> for styling, Use <strong> and <em>

5. Ensure form elements must have labels

6. Use Semantic HTML:
- <header> <footer> <nav> <main> <article> <sections> <aside>

7. Optimize title
always try to write your title crisp, consise so that search engine get to identify that this website is of what

8. Meta is your best friend
 title, description, keywords, author

9. Use canonical tags to avoid duplicate content
http://www.google.com
https://www.google.com
www.google.com
google.com

<link rel="canonical" href="https://www.google.com" /> 

10. Optimize Headings (<h1>..<h6>)
- Only 1 h1 tag
- use heading hierarchically
<h1></h1>
<h2></h2>
<h3></h3>

11. Improve URL structures (<a> link)

- Use Meaningful URLs

Bad: example.com/p123
Good: example.com/seo-best-practices

- Use Descriptive Anchor Text

Bad: <a href="example.com">Click here</a>
Good: <a href="example.com/seo-guide">SEO Guide</a>

✔ Use rel="nofollow" for Untrusted Links

Hey Search Engines, here is the link. But i don't want you to increase the backlink score of this website. Consider it as user has opened it via URL.

<a href="https://untrusted.com" rel="nofollow">External link</a>

12. Optimize Images for SEO

- Use alt Attributes
- Use Descriptive Filenames

Bad: img123.jpg
Good: seo-best-practices.jpg

- Use width & height to Avoid Layout Shift
- Use Next-Gen Formats (WebP, AVIF)


13. Optimize for Mobile (meta viewport)

<meta name="viewport" content="width=device-width,initial-scale=1>

width=device-width : Sets the width of the page to follow the screen width of the device 300px

initial-scale=1: Sets the initial zoom level when the page is first loaded = 1

Why This Matters:

Without the viewport meta tag:

- Mobile browsers assume you're viewing a desktop site and try to show the entire page by zooming out
- ext and elements appear tiny on mobile devices
- Users need to zoom in to read content
- Responsive designs break because the browser isn't respecting the device width.

Technical Explanation

Before mobile-optimized websites became common, mobile browsers would render pages at a desktop viewport width (typically 980px) and then shrink the result to fit the mobile screen. This was a solution for viewing desktop-only websites on mobile, but it made text tiny and required users to zoom in.

The viewport meta tag was introduced to solve this problem by telling the browser:

"Use the actual device width as the viewport width"
"Don't automatically zoom out to show the whole page"

This enables responsive design techniques to work properly, as CSS media queries can now accurately target the actual device dimensions.

14. Use structured data and MicroData (Schema.org)

- This helps us to get fancy search result in search engines of our website 
- go to schema markup generator and generate like product, social profile, breadcrumbs

15. Robot.txt
- Sometimes we don't want to show some page to hide from scanning from search engines.
- websiteurl/robots.txt