import React, { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

const FetchOld = () => {
  const [posts, setPosts] = useState([]);
  const [loading,setLoading] = useState(true)

  const getPostsData = async () => {
    setLoading(true)
    try {
      const res = await fetchPosts();
      res.status === 200 ? setPosts(res.data) : [];
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <>
    {loading && <p>Loading....</p>}
      <main className="min-h-screen bg-gray-900">
        <h1 className="text-center text-4xl text-white py-6">Posts</h1>
        <div>
          {posts?.map(({ title, body, id }) => (
            <div
              key={id}
              className="max-w-4xl mx-auto mb-6 bg-gray-700 text-white py-4 px-5 border-l-4 border-gray-200"
            >
              <p className="pb-3">{title}</p>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default FetchOld;
