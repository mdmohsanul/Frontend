import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
    title : {
        default:"Employees page",
        template:"%s | Employees Details",
        absolute:""
    }
}

const Employees = () => {
  return (
    <div>Employees</div>
  )
}

export default Employees