import React, { useState,useMemo, useEffect } from 'react'

const Practice = () => {
    const [inputValue,setInputValue] = useState("")
    const [productsData,setProductsData] = useState([])
const [productsList,setProductLists] = useState([])
    useEffect(() => {
     async function getData(){
        const res =  await fetch("https://fakeapi.net/products")
        const data = await res.json()
        setProductsData(data.data)
        setProductLists(data.data)
     }
     getData()
    },[])

    useEffect(() => {
     const filterData = productsData.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
     setProductLists(filterData)
    },[inputValue,productsData])



    const debounce = (clbk,delay) => {
        let timer;
        return function(...args){
            if(timer) clearTimeout(timer)
                timer = setTimeout(() => {
               clbk.apply(this,args)
            },delay)
        }
    }

      const debouncedInputHandler = useMemo(
    () =>
      debounce((e) => {
        setInputValue(e.target.value);
        console.log(e.target.value)
      }, 2000),
    [] // only create once
  );
  return (
  <>

   <input type="text"   onChange={debouncedInputHandler}/>
   <p>Value : {inputValue}</p>
   {productsList?.map(item => <li>{item.title}</li>)}
  </>
  )
}

export default Practice