/* 
In TypeScript, type is a keyword used to create a type alias — basically a way to give a custom name to a type.

It doesn’t create a new type at runtime (like a class would), but instead defines a shape of data or a set of 
allowed types for the compiler to check against.

A type in TypeScript is a way to describe the shape or form of data. Using the type keyword, we can create type aliases to 
define primitives, objects, unions, intersections, and more, making our code safer and easier to maintain.

*/

// Type Alias for primitive

type UserID = string | number;

let userID: UserID;

userID = "abc123"; // ✅
userID = 101;      // ✅
// userID = true;  // ❌ Error


// Type alias for object

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const u3: User = { id: 1, name: "Alice", isAdmin: false };


type Success = { status: "success"; data: string };
type Errorr = { status: "error"; message: string };

type ApiResponse = Success | Errorr;

let res: ApiResponse = { status: "success", data: "Done!" };

/* 
Key Points about type

Alias, not a new type → it’s just a name for an existing type.
Can represent:
primitives
objects
arrays, tuples
unions (|)
intersections (&)
Can’t be re-opened (unlike interface). Once defined, you can’t add more properties later.

*/