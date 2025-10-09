/* 
-------------  Enums ---------------

Enums define a set of named constants.
Unlike type/interface, enums do exist at runtime (compiled into JavaScript objects).
Useful when you want a fixed set of possible values with automatic labels.

enums are limited to numbers or strings only.

*/

enum Role {
  Admin,    // 0
  User,     // 1
  Guest     // 2
}

console.log(Role.Admin);  // 0
console.log(Role[0]);     // "Admin"


// Using enum
enum Status {
  Pending,
  Shipped,
  Delivered
}

type Order = {
  id: number;
  status: Status; // enum
};

// Using union type instead of enum
type StatusType = "Pending" | "Shipped" | "Delivered";

type OrderAlt = {
  id: number;
  status: StatusType; // type union
};

/* 
👉 Difference:

enum gives you runtime values and reverse mapping (Status[0] → "Pending").
type union is lighter (compile-time only, no JS output).

*/