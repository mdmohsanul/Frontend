### Async and Defer

- Async and defer are boolean attributes which can be loaded along with the script tags. They are useful for loading external scripts into our webpages.
  eg: bootstrap.js etc

## What is difference between async and defer?

- If there are multiple scripts which are dependent on each other, use defer. defer scripts are executed in the order in which they are defined.

- If you want to load external script which are not dependent on execution of any other script, use async. Async attribute does not guarantee the order of execution of scripts.

## When we load a webpage then two major things happen in our web browser

- HTML Parsing
- The loading of the script
  - fetching the script from the network.
  - actually execute the script line by line.

## If we put our script tag at the end of the body tag then there is no use of using defer attribute bcoz it will execute after entire HTML parsing is done
