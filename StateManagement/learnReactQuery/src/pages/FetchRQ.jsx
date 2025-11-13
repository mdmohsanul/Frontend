import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { deleteHandler, fetchPosts } from "../API/api";

const FetchRQ = () => {
const [pageNum ,setPageNum] = useState(0)
  // react query give us the isLoading, isError key to display data gracefully

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts",pageNum], //useState
    queryFn: () => fetchPosts(pageNum),
    placeholderData:keepPreviousData
    // refetchInterval:1000
  });
const deleteMutation = useMutation({
  mutationFn : (id) => deleteHandler(id)
})
  const prevHandler = () => {
    setPageNum(prev => prev - 3)
  }
  const nextHandler = () => {
    setPageNum(prev => prev + 3)
  }
  if (isPending) return <p>Loading......</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <main className="min-h-screen bg-gray-900">
      <h1 className="text-center text-4xl text-white py-6">Posts</h1>
      <div>
        {data?.map(({ title, body, id }) => (
          <div
            key={id}
            className="max-w-4xl mx-auto mb-6 bg-gray-700 text-white py-4 px-5 border-l-4 border-gray-200"
          >
          <p>{id}</p>
            <p className="pb-3">{title}</p>
            <p>{body}</p>
            <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="text-white bg-gray-700 px-2 py-1 rounded-md cursor-pointer" disabled={pageNum <= 1} onClick={prevHandler}>Prev</button>
        <p>Page {pageNum / 3+1}  </p>
        <button className="text-white bg-gray-700 px-2 py-1 rounded-md cursor-pointer" onClick={nextHandler}>Next</button>
      </div>
    </main>
  );
};

export default FetchRQ;
