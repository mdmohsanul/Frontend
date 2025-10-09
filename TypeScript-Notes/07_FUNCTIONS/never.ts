/* 
Represents a value that never occurs.

Typically used in functions that throw errors or never return. 
*/

function error(message: string): never {
  throw new Error(message);
}
