import React from 'react'
import useFetch from '../hooks/useFetch'

const PlainSearchBars = () => {
    const {data,loading,error} = useFetch("https://dummyjson.com/products")
    console.log(data)
    if(loading){
        return <p>Loading....</p>
    }
    if(error){
        return <p>Error fetching data.</p>
    }

    
    return (
        <>
         <h1>Search Bar</h1>

         <div>

         </div>

   
        </>
  )
  
}

export default PlainSearchBars