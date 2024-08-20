import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return <div>상품리스트페이지{id}</div>;
};

export default ProductDetail;
