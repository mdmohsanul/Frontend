import React from 'react'
import { Metadata } from 'next'
type Props ={
  params:Promise<{productId:string}>
}

// metadata through function
export const generateMetadata = async({params}:Props) :Promise<Metadata> =>{
  const productId =( await params).productId
 // in real application the productId is come from an API which takes some time
 const title = await new Promise((resolve) => {
  setTimeout(() => {
    resolve(`ihphone ${productId}`)
  },1000)
 })
  return {
    title:`Product ${title}`
  }
}

const ProductDetails = async({params}:{params:Promise<{productId:string}>}) => {
    const productId =( await params).productId
  return (
    <div>Product Details Page {productId}</div>
  )
}

export default ProductDetails