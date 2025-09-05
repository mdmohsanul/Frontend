'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const NotFound = () => {

  const pathname =   usePathname()
  const productId = pathname.split("/")[3]
  const reviewId = pathname.split("/")[5]
   console.log(pathname)
  return (
    <div>Review Not Found for review {reviewId} for product {productId}</div>
  )
}

export default NotFound