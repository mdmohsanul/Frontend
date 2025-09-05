import React, { useEffect, useState } from 'react'

const Pagination = () => {
const [products,setProducts] = useState([])
const [currentPage,setCurrentPage] = useState(1)
    useEffect(() => {
  async function fetchData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    setProducts(data)
  }
  fetchData()
    },[])
    const limit = 10
    const totalProducts = products?.length
    const totalPages = Math.ceil(limit/totalProducts)
    const startIndex = (currentPage - 1) * limit
    const currentProduct = products.slice(startIndex,startIndex+limit)
  return (
    <div>
        <h1>Pagination</h1>
        <div>{
            currentProduct?.map((item) => <p>{item}</p>)
        }</div>

        <div>
            <button disabled={currentPage === 0} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Prev</button>

        </div>
    </div>
  )
}

export default Pagination