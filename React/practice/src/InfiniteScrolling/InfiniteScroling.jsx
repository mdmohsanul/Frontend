import { useEffect, useState, useCallback } from "react";
import "./index.css";
import "./App.css";

export default function InfiniteScroling() {
  const [fetchedData, setFetchedData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const itemsPerPage = 6;

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      setFetchedData(data);
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Debounce function
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
    ) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 300);
    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, [handleScroll]);

  const list = fetchedData.slice(0, page * itemsPerPage);

  return (
    <div className="App">
      {loading && <p>Loading...</p>}
      {err && <p>Error: {err}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {list.map((item) => (
          <div
            key={item.id}
            style={{
              height: "300px",
              width: "300px",
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <img src={item.thumbnailUrl} alt={item.title} height="150" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
