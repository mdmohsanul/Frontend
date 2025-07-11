"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const navLinks = [
        {
            linkName:"Login",
            linkTo:"/login"
        },
        {
            linkName:"Register",
            linkTo:"/register"
        },
        {
            linkName:"Forgot Password",
            linkTo:"/forgot-password"
        },
    ]
    const pathName = usePathname()
  
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {navLinks.map(item => {
            const isActive = pathName === item.linkName || (pathName.startsWith(item.linkName) && pathName !== "/")
           return <Link className={`${isActive ? "font-bold ":""} px-3`} href={item.linkTo} key={item.linkName}>{item.linkName}</Link>
})}
        {children}
       
      </body>
    </html>
  );
}