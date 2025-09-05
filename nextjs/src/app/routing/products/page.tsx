"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProductsPage = () => {
  const router = useRouter()
const handleClick = () => {
 router.push("/routing")
}
  return (
    <div>

        <h1>Products</h1>
        <ul>
            <li> <Link href={"/routing/products/1"}>Product 1</Link>
            <button className='px-5 py-2 bg-amber-200' onClick={handleClick}>Order Product</button>
             </li>
            <li><Link href={"/routing/products/2"}>Product 2</Link> <button onClick={handleClick} className='px-5 py-2 bg-amber-200'>Order Product</button> </li>
            <li><Link href={"/routing/products/3"}>Product 3</Link> <button onClick={handleClick} className='px-5 py-2 bg-amber-200'>Order Product</button> </li>
            <li><Link href={"/routing/products/4"}>Product 4</Link>  <button onClick={handleClick} className='px-5 py-2 bg-amber-200'>Order Product</button></li>
        </ul>
    </div>
  )
}

export default ProductsPage