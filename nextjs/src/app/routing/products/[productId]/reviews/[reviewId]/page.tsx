import { notFound } from 'next/navigation';
import React from 'react'


// example of error.js
function getRandomInt(count:number){
  return Math.floor(Math.random() * count)
}


const ReviewId = async ({params} : {params:Promise<{reviewId:string; productId:string}>}) => {
    
  const random = getRandomInt(2)
  if(random === 1) {
    throw new Error("Error loading review")
  }
  const {reviewId,productId} = await params

    if(parseInt(reviewId) > 1000){
      notFound()

      // if we want to redirect to a page instead to not found page
      // redirect("/")
    }
  return (
    <div>Review {reviewId} for product {productId}</div>
  )
}

export default ReviewId