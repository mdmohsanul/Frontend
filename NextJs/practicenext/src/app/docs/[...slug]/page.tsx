import React from 'react'

const Docs = async({params}:{params:Promise<{slug:string[]}>}) => {
    const {slug} = await params
    if(slug.length === 2){
        return <h1>Docs of feature {slug[0]} and the concept is {slug[1]} </h1>
    }
    if(slug.length === 1){
        return <h1>Docs of feature {slug[0]}  </h1>
    }
  return (
    <div>Docs related page</div>
  )
}

export default Docs