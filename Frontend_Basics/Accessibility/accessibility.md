# Accessibility (A11y) -> there are 11 letters between a and y

# Web Accessibility is the crucial part of web development that ensures any website or web application can be used by everyone including people with disabilities

-There are some basic accessibilty principles 

# Use Semantic HTML
- Use proper HTML elements to structure your content <header> <footer> <form> <section>

# Use proper heading structure (<h1> to <h6>) in logical order.

# Keyboard navigation
- Make sure that all the interactive elements can be accessed by keyboard.
- Test your website's tab order and make sure it follows a logical flow.
 <button tabIndex='0'>Click me</button>
 <input type="text" tabIndex='-1'>
- Use tabIndex=0 for elements that should be focusable
- Use tabIndex=-1 for elements that should be focusable only through scripts




# Alt Text: 
- Always include descriptive and meaningful alternative text for images (<img>). This is essential for users who are blind or have low vision.
<img src="apple.jpg" alt="A red apple on a wooden table">

# Use Descriptive Link Text
<a href="/download">Download the PDF report</a>

# Labels for Form Controls: 
- Use <label> elements to associate text labels with form controls. This helps screen reader users understand the purpose of each field.
<label for="username">Username:</label>
<input type="text" id="username" name="username">

# Captions and Transcripts: 
- Provide captions or transcripts for audio and video content. This benefits users who are deaf or hard of hearing.

# Avoid Auto-Playing Media: 
- Don't auto-play audio or video content. If it's necessary, provide controls for users to pause or mute it.

# Use ARIA (Accessible Rich Internet Applications) Attributes Carefully
- It is a set of attributes that you can add to HTML elements to improve accessibility, especially for dynamic or complex UI components that aren't natively accessible.

Why ARIA is needed?
HTML alone can't always describe custom elements like modals, sliders, accordians, tabs. So in this ARIA helps

1. ARIA Roles
role="button"	Announces the element as a button
role="dialog"	Declares a modal/popup dialog
role="navigation"	Identifies a nav section
role="alert"	Announces dynamic content changes
role="tablist"	Group of tabs

<div role="button" tabindex="0">Click Me</div>

2. ARIA States and Properties (Attributes)
They provide extra information about an element’s current status or behavior.

aria-label	Custom label for screen readers
aria-hidden="true"	Hides element from assistive tech
aria-disabled="true"	Marks an element as disabled
aria-expanded="false"	Shows collapsed/expanded state
aria-checked="true"	Checkbox/radio is selected

<button aria-label="Close menu"></button>


Important Guidelines

Prefer native HTML first (e.g., use <button>, not <div role="button">)
Use ARIA only when needed — "no ARIA is better than bad ARIA"
Always test with screen readers (like NVDA, VoiceOver)