import React from 'react'

const InfiniteScrolling = () => {
      const fetchData = async () => {
  
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setFetchedData(data);
    } catch (error) {
      setErr(error.message);
    } finally {
     
    }
  };
  return (
    <div>InfiniteScrolling</div>
  )
}

export default InfiniteScrolling