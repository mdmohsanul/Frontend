import React from 'react'
import { Metadata } from 'next'


// this will override the default metadata
export const metadata :Metadata ={
    title:{
        absolute:"Nested Data"
    }
}
const NestedMetaPage = () => {
  return (
    <div>page</div>
  )
}

export default NestedMetaPage