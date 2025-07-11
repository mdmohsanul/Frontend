# Link component navigation

For client-side navigation, Next.js gives us the <Link> component

The <Link> component is a react component that extends the HTML <a> element, and it's the primary way to navigate between routes in next.js

- To use it, we'll need to import it from "next/link"
- <Link href=""></Link>

# To get the active link
import { usePathname } from "next/navigation";
 const pathName = usePathname()
 {navLinks.map(item => {
            const isActive = pathName === item.linkName || (pathName.startsWith(item.linkName) && pathName !== "/")
           return <Link className={`${isActive ? "font-bold ":""} px-3`} href={item.linkTo} key={item.linkName}>{item.linkName}</Link>
})}

# params and searchParams

- params is a promise that resolve to an object containing the dynamic route parameters (like id)
- searchParams is a promise that resolve to an object containing the query parameters like searching,sorting