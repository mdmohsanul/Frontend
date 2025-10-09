# What is HTML?
- HTML is a standard way to create and structure the webpage. It is a markup language, it means it uses tags to descibe the structure and content of the webpage. and it is platform independent means it will run on all browsers.

# What is markdown?
Markdown is lightweight markup language used to format text using plain text syntax.
It is mainly used to create documentation or Readme files for platform like github and reddit.
 
# What is <!DOCTYPE html>

- It Declares the document type. Tells the browser that this is an HTML5 type document.

# What is <html></html>
- So, this is the root element of the document. It wraps all our content.

# What is <head> tag?
- It contains metadata (data about the document) that is not displayed on the browser directly.
- Common elements inside head tag.
<meta charset='utf-8'>
- charset -- It is a HTML attribute used to convert machine code into human readable format.

<meta name='viewport' content='width=device-width'>
- viewport -- The visible area of the webpage
viewport changes based on different devices, It gives the browser instructions on how to control the webpage dimensions.

<title> → sets the page title shown in the browser tab.
<link> used to link external sources which our webpage needed
<script> - Javascript files.

- meta tag contain data which are used by search engines.

# What is <body> tag?
- contains all the visible content that gets rendered on the page.
- Everything inside the <body> helps create the DOM tree. This DOM tree is what JavaScript can interact with, allowing us to make web pages dynamic and interactive.


# What is semantic elements?
- Semantic elements clearly describe their meaning. It means thier name clearly describe the purpose of the content.
- Help both browser and developer understand the structure of the webpage.
- Good for SEO(Search Engine Optimization) and accessibility (screen readers)

Semantic Tags are
- header - top section of a page
- nav - includes navigation links
- main - main content
- artice
- aside
- section
- footer

# What are non-semantic elements?

- They are just containers with no meaning (<div>, <span>).
- Provide no context about what the content is.
- Used mostly for styling/layout.


## Difference between element, tag and attribute?
Tag	- Markup that defines an element	<p> or </p>
Element - A complete HTML unit (tag + content)	<p>Hello</p>
Attribute - Adds extra info to a tag/element	alt="text" in <img>

# Difference between block and inline elements
- Block level element starts with new line
- Block level elements takes the full width of the container
- Can contain other block or inline elements
- <p> <h1> <div> <section> <article> <header> <footer>

- Inline elements takes as much width as necessary
- can contain only inline elements
- <span> <label> <a> <input> <img> 

# Features comeup with HTML5?

- Semantic elements -> header,nav,main,section,aside,footer
- Multimedia support -> without using third-party libraries like flash
   (audio and video)
   <video controls>
  <source src="movie.mp4" type="video/mp4">
   </video>
- Input types  -> email, url, tel, number, date, range, color, etc.
  attributes -> placeholder, required, autofocus, pattern, min, max, step

- APIs and Browser Features
   Canvas API: Draw graphics using JavaScript (<canvas>)
   SVG: Scalable vector graphics support
   Geolocation API: Get user's location
   .Web Storage API: Store data locally (localStorage, sessionStorage)
