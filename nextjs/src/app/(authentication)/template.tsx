"use client"

import Link from "next/link"
import { useState } from "react"

const navLinks = [
    {
        name:"Register",
        href:"/register"
    },
    {
        name:"Login",
        href:"/login"
    },
    {
        name:"Forgot Pasword",
        href:"/forgot-password"
    },
]

export default function AuthLayout({children} : {children:React.ReactNode}){
const [inputValue,setInputValue] = useState("")
    return <>
    <Link href="/" className="bg-gray-950 text-white py-2  px-4 my-4 inline-block">Home</Link>
    <input type="text" name="" id="" value={inputValue} onChange={(e) => setInputValue(e.target.value)
    } />
    <div className="flex gap-3">
        {navLinks?.map((item,idx) => {
            return <>
              <Link href={`${item.href}`} key={idx} className="text-blue-700">{item.name}</Link>
            </>
        })}
    </div>
    {children}
    </>
}