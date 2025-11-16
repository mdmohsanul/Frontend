# How Browser render our HTML, CSS and JS files?

- Step 1 -> Load the HTML file
  When browser or any engine load a file it comes in RAW BYTES (1010101)

- Step 2 -> Raw Bytes is converted into character encoding
  In our html file inside the head tag we write a meta tag which include the charset="UTF-8".
  So, UTF-8 is responsible for converting Raw Bytes to charater.
  UTF-8 supports English, hindi, Japanese, emoji, symbol and many more

* Every programming language perform this conversion

- Step 3 -> Tokenization
   Find all the tags html, h1, body, p and for each token entities an object is created which holds information about the entities.
   {
    tag: h1,
    title:""
    data:"lorem impsum"
   }
   {
    tag:p,
    data:""
    title:""
   }

- Step 4 -> Relation is created between entities which create Node List

* So the HTML is "DOCUMENT" , Tokenization create "OBJECT" and Node List create "MODEL"

- Now DOM is created

- Step 5 -> For CSS same process is followed

# As we load or HTML file it starts working to create DOM but the moment it sees a link of CSS file then the browser simultaneously or parallely starts to converting CSS to CSSOM

- Step 6 -> Render Tree: It gathers all the information like DOM and CSSOM and give to browser engine which calculate the size, position of elements and starts painting the browser

- The moment browser sees the script tag it stop the parsing because Js has capability of manipulating the DOM and CSSOM.

- JavaScript will be halted until CSSOM is ready