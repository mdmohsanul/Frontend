import Link from 'next/link'
import React from 'react'

const F1Page = () => {
  return (
    <>
    <h1>F1 Page</h1>
    <div>
        <Link href={"/interceptingRoutes/f1/f2"}>F2</Link>
        <Link href={"/interceptingRoutes/f3"}>F3</Link>

    </div>
    </>
  )
}

export default F1Page