import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const PlainSearchBars = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/products");
  const products = data?.products || [];

  const [searchedText, setSearchedText] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');


  // Initialize searchedProduct when products are fetched


  // Debounce searchedText
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchedText);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchedText]);

  // Filter products based on debounced query
  useEffect(() => {
    if (debouncedQuery) {
      const filtered = products.filter(item =>
        item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      );
      setSearchedProduct(filtered);
      console.log(debouncedQuery); // log the searched text
    } else {
      setSearchedProduct(products); // reset if search is empty
    }
  }, [debouncedQuery, products]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error fetching data.</p>;

  return (
    <div className='max-w-5xl mx-auto'>
      <h1>Search Bar</h1>
      <input
        type="text"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
        placeholder="Search products..."
        className="border p-2 rounded w-full"
      />
      <div className='grid grid-cols-4 gap-3 mt-7'>
        {searchedProduct.map(item => (
          <div key={item.id} className='border border-black p-4'>
            <h1 className='font-bold'>{item.title}</h1>
            <p>{item.tags.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlainSearchBars;
