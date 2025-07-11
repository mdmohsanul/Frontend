'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

const ReviewNotFound = () => {
    const pathname = usePathname()
 
    const productId = pathname.split("/")[2]
    const reviewID = pathname.split("/")[4]

  

  return (
    <div>ReviewNotFound Page for product {productId} and review {reviewID} </div>
  )
}

export default ReviewNotFound