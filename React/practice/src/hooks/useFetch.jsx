import { useEffect, useState } from "react"

const useFetch = (url) => {
   const [data,setData] = useState([])
   const [loading,setLoading] = useState(true)
   const [error,setError] = useState(null)

   useEffect(() => {
    async function fetchData(){
        try{
 const res = await fetch(url)
        const data = await res.json()
        setLoading(false)
        setData(data)
        }catch(error) {
            setLoading(false)
            setError(error)
        }
       
    }
    fetchData()
   },[url])
   return {data,loading,error}
}

export default useFetch