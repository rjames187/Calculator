# Calculator
This is a JavaScript calculator I've built complete with a web ui. 

It supports the four basic math operations as well as floating point numbers. However, only nine digits are supported for operands and only ten digits are supported for results as there is a limited graphical area for displaying the digits.

# Technical Details
The calculator is built with plain vanilla HTML, CSS, and JavaScript.

The functionality of the calculator is driven by JavaScript event listeners attached to the DOM through the vanilla JavaScript DOM API. Each button has an event listener which fires upon being clicked. Each event listener is fed an anonymous function that contains the logic for manipulating the DOM and changing the content of the display.

One of the more interesting things I learned from this project is that the CSS border-radius property can be applied individually to each corner of a div element. It's how I managed to render the shape of the whole calculator while having different backgound colors for the top and bottom sections. 
