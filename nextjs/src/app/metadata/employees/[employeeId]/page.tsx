import React from 'react'
import { Metadata } from 'next'

type Props = {
    params:Promise<{employeeId:string} >
}

export const generateMetadata = async({params}:Props) : Promise<Metadata> => {
    const {employeeId} = await params
    // if the product is coming from an API
    const title = await new Promise((res) => {
setTimeout(() => {
         res(`${employeeId}`)
    },1000)
    })
    
    return {
        title :`Employee ${title}`
    }
}

const EmployeeId = async({params}:Props) => {
    const {employeeId} = await params
  return (
    <div>Details of employee: {employeeId}</div>
  )
}

export default EmployeeId