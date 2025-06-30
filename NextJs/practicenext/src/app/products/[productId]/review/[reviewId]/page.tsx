import React from 'react'
import { notFound } from 'next/navigation';
const ProductReview = async({params}:{params:Promise<{productId:string;reviewId :string}>}) => {
    const {productId,reviewId} = await params
    if(parseInt(reviewId) > 1000){
         notFound()
    }
  return (
    <div>ProductReview of product {productId} and review ID is {reviewId}</div>
  )
}

export default ProductReview