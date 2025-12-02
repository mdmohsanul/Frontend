import React, { useEffect, useReducer, useRef, useState } from "react";

const cachedData = new Map()
const useFetch = (url) => {
  const [data ,setData] = useState(cachedData.get(url) || [])
  const [loading,setLoading] = useState(!cachedData.has(url))
  const [error,setError] = useState(null)
const controllerRef = useRef()
  async function fetchData(){
    try {
      if(cachedData.has(url)){
        setData(cachedData.get(url))
        setLoading(false)
        return
      }
      controllerRef.current?.abort()
      const controller = new AbortController()
      controllerRef.current = controller
      setLoading(true)
      const res = await fetch(url,{signal:controller.signal})
      if(!res.ok) throw new Error("failed to fetch")
        const resData = await res.json()
  
      cachedData.set(url,resData)
      setData(resData)
  
    }
     catch (error) {
      if(error.name === "AbortError") return
      setError(error)
      
    }finally{
      setLoading(false)
    }
 // initial fetch
  useEffect(() => {
    fetchData();

    return () => {
      // abort on unmount
      controllerRef.current?.abort();
    };
  }, [fetchData]);

  // expose a refetch that bypasses cache
  const refetch = useCallback(() => fetchData(true), [fetchData]);

  return { data, loading, error, refetch };
};
}
export default useFetch
