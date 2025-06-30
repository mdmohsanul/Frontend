import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateData,
  updateError,
  updateLoader,
} from "./store/actions/productActions";
export const useFetch = (url) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(updateLoader(true));
        const res = await fetch(url);
        const data = await res.json();
        dispatch(updateLoader(false));
        dispatch(updateData(data));
      } catch (error) {
        dispatch(updateError(error));
      }
    }

    fetchData();
  }, [url, dispatch]);

  return { data, loading, error };
};
