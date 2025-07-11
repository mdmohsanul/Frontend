## how to link or apply css on our HTML

- External
  inside head tag by writing link attribute
  <link href='style.css' rel='stylesheet'>

- Internal
  by declaring style tag inside head tag
   <style>
      p{
        color: red;
      }
    </style>

- Inline
  <p style="color: orange; font-size:24px">This is heading</p>

## What are selectors in CSS

- id
- class
- Element Selector
  p{

  }

- universal selector
  \*{
  text-align: center;
  color: blue;
  }
- Grouped Selector
  h1, h2, p {
  text-align: center;
  color: red;
  }

- Pseudo Classes -> A pseudo-class is used to define a special state of an element.
  selector:pseudo-class {
  property: value;
  }

- Pseudo Elements -> A CSS pseudo-element is used to style specific parts of an element.
  selector::pseudo-element {
  property: value;
  }

## What is Box model

- The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins.
  Content - The content of the box, where text and images appear
  Padding - Clears an area around the content. The padding is transparent
  Border - A border that goes around the padding and content
  Margin - Clears an area outside the border. The margin is transparent

## What is Box-sizing?

- The CSS box-sizing property allows us to include the padding and border in an element's total width and height.

* {
  box-sizing: border-box;
  }

## What is layout flows

- Inline elements --> height and width property will not work
- Block Elements
- inline-Block Elements

## What are CSS positioning

- static -> by default all the element position is static
- relative ->
- absolute ->
- sticky ->
- fixed ->

## media queries

- media queries provides a user friendly experience and makes our web apps fit to all devices without overflow in css terms.
  @media (condition){
  style
  }
  condition - max-width:600px (means when maximum width of my screen or viewport reaches 600px then apply conditions )
  min-width:600px (mobile first approach)

## Center a div

{
display : grid;
place-items:center
}

{
display:flex;
align-items:center;
justify-content:center;
}

{
//make parent position relative
position:absolute;
top:50%;
left:50%;
transform: translateX(-50%,-50%)
}

## How to restrict user selection

{
user-select:none;
}

## Text transform

{
text-transform:uppercase;
text-transform:lowercase;
text-transform:capitalize;

}

## Letter Spacing

{
letter-spacing: 2px
}

## Word spacing

{
word-spacing:10px
}

## Line height

{
line-height:20px;
}

## Change the input caret color (the blinking vertical line inside input box)

{
caret-color:red;
}

## Styling placeholder

input::placeholder{
color:red;
}

## On focus on input element customize the border

input:focus{
outline-color:red;
}

## Use max-width property to assure that the content will not move outside the defined width

{
max-width:768px;
}

## On select/copy any text from our website we can customize it by using pseudoelement selection

h4::selection{
backgroun-color:red;
}

.para::first-letter{
text:20px;
color:red;
}
