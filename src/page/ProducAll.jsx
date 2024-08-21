import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProducAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:4000/products";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductCard />
    </div>
  );
};

export default ProducAll;
