/* 
-------------- String to Number -------------------

1. Number() - clean string to number, remove all the spaces 
2. Unary + operator (shorthand for Number())
3. parseInt() (for integers only) Converts up to the first non-digit character.
4. parseFloat() (for floating point numbers)
5. Math.floor(), Math.ceil(), Math.round() (if you want integers)

*/

let str = "5214";
let str2 = "123abc";
let str3 = "abc";
let str4 = "     524   ";

// ----------------------------------------------------------------
Number("42"); // 42
Number("3.14"); // 3.14
Number("abc"); // NaN

// ---------------------------------------------------------------

+"123"; // 123
+"3.14"; // 3.14
+"abc"; // NaN

// -------------------------------------------------------------------

parseInt("42"); // 42
parseInt("42px"); // 42
parseInt("abc"); // NaN
parseInt("10", 2); // 2 (binary parsing)

// -------------------------------------------------------------------------

parseFloat("3.14"); // 3.14
parseFloat("3.14abc"); // 3.14
parseFloat("abc"); // NaN

// -------------------------------------------------------------------------

Math.floor("42.7"); // 42
Math.ceil("42.1"); // 43
Math.round("42.5"); // 43

Number("   123   "); // 123 (trims whitespace)
parseInt("08"); // 8, but may behave oddly in some old JS engines
Number(""); // 0
Number(" ") + // 0
  " "; // 0
parseInt(""); // NaN
