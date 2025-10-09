/* Type Assertions (as keyword)

Tells TypeScript to treat a value as a specific type.
 */
let someValue: unknown = "Hello TS";
let strLength: number = (someValue as string).length;



let stringLength: number = (<string>someValue).length; // JSX projects prefer `as`