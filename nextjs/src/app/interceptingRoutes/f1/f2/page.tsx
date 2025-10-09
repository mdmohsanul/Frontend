import Link from 'next/link'
import React from 'react'

const F2Page = () => {
  return (
    <>
    <h1>F2 Page</h1>
    <div> 
        <Link href={"/interceptingRoutes/f4"}>F4</Link>
    </div>
    </>
  )
}

export default F2Page