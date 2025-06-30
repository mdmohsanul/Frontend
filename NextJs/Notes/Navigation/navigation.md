# Link component navigation

For client-side navigation, Next.js gives us the <Link> component

The <Link> component is a react component that extends the HTML <a> element, and it's the primary way to navigate between routes in next.js

- To use it, we'll need to import it from "next/link"
- <Link href=""></Link>

# To get the active link
import { usePathname } from "next/navigation";
