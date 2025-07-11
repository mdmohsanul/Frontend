# In react form elements like <input>, <textarea> and <select> can behave in two ways depending on how we manage their state:

# Controlled Component - React is in full control of the form element

# Uncontrolled Component - The form element manages its own state (like plain HTML), and react access the value using a ref.

# What is controlled components?

- A controlled component is one where the form data is handled by the react components using useState.

- You always know the current value and update it, validate it or manipulate it easily

- Instead of the input managing its own state (like plain HTML), React controls the value by:
  • storing it in state
  • updating it through an onChange handler
  • and re-rendering the UI when it changes

# What is uncontrolled components?

- An uncontrolled component lets the DOM (not react) keep track of the input state. You use a ref to read its value only when needed.

- Instead of react controlling the value, the input
  • stores its own value internally (within the DOM)
  • doesn't require useState or onChange for every update.
  • lets you access the value using useRef, usually at the time of form submission or interaction.

✅ When to use What?

- Use Controlled when:
  • You need istant validation
  • You need to enable/disable fileld dynamically
  • You need to manipulate input fileds easily
  • You want to submit data via react state

- use Uncontrolled When:
  • You want minimal code
  • You dont't care about real-time input
  • You work with 3rd party-libraries/forms.
