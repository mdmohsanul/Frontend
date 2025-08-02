import React from 'react'

const ReviewId = async ({params} : {params:Promise<{reviewId:string}>}) => {
    const {reviewId} = await params
  return (
    <div>ReviewId of {reviewId}</div>
  )
}

export default ReviewId