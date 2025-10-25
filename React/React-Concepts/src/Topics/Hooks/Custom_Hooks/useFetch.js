import React, { useEffect, useState } from "react";


const useFetch = (url) => {

    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(null)

    useEffect(() => {
       async function fetchdata() {
        setIsLoading(true)
        try{
            const res = await fetch(url)
            const resData = await res.json()
            setData(resData)
        }catch(error){
            setIsError(error)
        }finally{
            setIsLoading(false)
        }
       }
       fetchdata()
    },[url])

    return {data,isLoading,isError}
}

export default useFetch