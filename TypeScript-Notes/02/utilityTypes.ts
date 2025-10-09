/* Utility Types

TypeScript provides built-in helpers for common transformations.

Partial<T>

Makes all properties optional.
 */

type User = { id: number; name: string };

let u1: Partial<User> = { name: "Alice" }; // id not required

Pick<T, K>

Selects only specific properties.

type User = { id: number; name: string; age: number };

type UserPreview = Pick<User, "id" | "name">;

const u2: UserPreview = { id: 1, name: "Bob" };

/* Omit<T, K>

Opposite of Pick, removes properties. */

type UserPreview3 = Omit<User, "age">;

const u5: UserPreview3 = { id: 2, name: "Charlie" };

// Readonly<T>

// Makes all properties read-only.

type UserReadOnly = Readonly<User>;

const u4: UserReadOnly = { id: 3, name: "Dana", age: 30 };
// u4.age = 31; ❌ Error

/* Record<K, V>

Creates an object type with keys of K and values of V. */

type Roles = "admin" | "user" | "guest";

const rolePermissions: Record<Roles, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};