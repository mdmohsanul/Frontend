import { useSelector } from "react-redux";
import "./App.css";
import Product_Card from "./component/Product_Card";
import { useFetch } from "./useFetch";

function Products() {
  const { products, isLoading, isError } = useSelector((state) => state);
  // console.log(appData);
  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (isLoading) return <p>Loading....</p>;
  if (isError) return <p>{isError}</p>;
  return (
    <>
      <div className="container">
        <h1>Products</h1>

        <div className="products">
          {products?.products?.map((item) => (
            <Product_Card data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Products;
