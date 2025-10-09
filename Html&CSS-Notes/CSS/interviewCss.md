# What is CSS and why is it used?

CSS stands for Cascading Style Sheets.
It is used to style and design HTML elements — controlling how a webpage looks (colors, fonts, layout, spacing, animations, responsiveness, etc.).

# Difference between inline, internal, and external CSS?
 
Inline CSS  (try to avoid)
- Inside the element’s style attribute.
- Affects only that element
- Quick, overrides other styles
- Not reusable, messy for large projects

Internal CSS (okay for small projects/single pages.)
Inside a <style> tag in the <head> of the HTML file
Affects only that page
Good for single-page styling
Not reusable across pages

External CSS (best practice for real-world websites.)
In a separate .css file linked with <link>	
Affects multiple pages	
Reusable, clean, better performance	
Needs extra HTTP request

# What are CSS selectors?
- element selector - <p> <h1>
- class selector - used to style multiple elements - .classname
- id selector - used to uniquely style an element
- pseudo-classes - a:hover, a:focus
- pseudo-elements -(Targets part of an element (not the whole)) -  p::before , p::after

# What are CSS positions

1. Relative (position: relative)
The element is positioned relative to its normal position in the document flow.
You can shift it using top, left,right, bottom.
Space is still reserved in the layout.

Absolute (position: absolute)
The element is positioned relative to the nearest positioned ancestor (not static).
If no positioned ancestor exists → it is positioned relative to the <html> / body.
Removed from normal document flow (doesn’t reserve space).

3. Fixed (position: fixed)
The element is positioned relative to the viewport (browser window).
It stays in place even when you scroll.
Commonly used for sticky headers, navbars, or floating buttons.

4. Sticky (position: sticky)
A hybrid of relative + fixed.
Acts like relative until a scroll threshold is reached, then it “sticks” like fixed.
Useful for headers or table columns that should stick within their container.

# Difference between em, rem, %, px, and vh/vw units?

- px is fixed, 
- % is relative to parents size, 
- em is relative to parents font size, 
- rem is relative to root font-size, 
- vh/vw are relative to viewport size.

# Difference between z-index and stacking context

Controls the stacking order (which element appears on top when elements overlap).
Higher z-index = closer to the viewer.
Works only on positioned elements (relative, absolute, fixed, sticky).

# Difference between relative, absolute, and inherit values in CSS

relative -> Value is relative to another measurement (depends on property).
p{
    font-size : 120% (120% of its parent)
}

absolute -> A fixed value, not dependent on parent.
p{
    font-size:16px
}

inherit → Forces the property to copy the parent’s value.
p{
    color:inherit
}

# Difference between visibility:hidded and display:none?
visibility: hidden	Hides the element but keeps its layout (still takes up space)	
display: none	Removes the element completely from the document flow