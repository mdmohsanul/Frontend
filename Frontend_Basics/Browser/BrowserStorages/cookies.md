# cookies

Cookies are automatically sent to the server with every HTTP request — but only for the domain (and path) they belong to.


// Set cookie
document.cookie = "username=John; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// Read cookie
console.log(document.cookie); // "username=John"


| Attribute             | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `domain`              | Defines which domain can receive the cookie                    |
| `path`                | Limits where the cookie is valid (e.g., `/admin`)              |
| `expires` / `max-age` | Defines cookie lifetime                                        |
| `Secure`              | Cookie is sent only over HTTPS                                 |
| `HttpOnly`            | Cookie not accessible via JavaScript (prevents XSS attacks)    |
| `SameSite`            | Controls cross-site request behavior (`Strict`, `Lax`, `None`) |
