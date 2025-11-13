import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async(pageNum) => {
  try{
    const res = await api.get(`/posts?_start=${pageNum}&_limit=3`);
    return res.status === 200 ? res.data : [];
  }catch(error){
    console.log(error)
  }
  
};

export const deleteHandler = async(id) => {
  try{
    const res =  await api.delete(`/posts/${id}`)
    return res.status === 200 ? res.data : []
  }catch(error){
    console.log(error)
  }
}
