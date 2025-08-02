import Link from 'next/link'
import React from 'react'

const ProductsPage = () => {
  return (
    <div>

        <h1>Products</h1>
        <ul>
            <li> <Link href={"/routing/products/1"}>Product 1</Link> </li>
            <li><Link href={"/routing/products/2"}>Product 2</Link> </li>
            <li><Link href={"/routing/products/3"}>Product 3</Link> </li>
            <li><Link href={"/routing/products/4"}>Product 4</Link> </li>
        </ul>
    </div>
  )
}

export default ProductsPage