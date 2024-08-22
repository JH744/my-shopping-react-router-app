import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  const { id } = useParams();
  const [productItem, setProductItem] = useState({});
  const getItemData = async () => {
    const url = `http://localhost:4000/products/${id}`;
    // const url = process.env.REACT_APP_API_URL;
    const response = await fetch(url);
    const item = await response.json();
    console.log("item", item);
    setProductItem(item);
  };
  useEffect(() => {
    getItemData();
  }, []);
  return (
    <div className="item-detail">
      <img alt="상품이미지" src={productItem?.img} width={300} height={400} />
      <div className="item-info">
        <h3>{productItem?.title}</h3>
        <h5>￦ {productItem?.price}</h5>
        <span>{productItem?.choice && "consumer choice"}</span>
        <Dropdown>
          <Dropdown.Toggle variant="danger" id="dropdown-basic" size="sm">
            사이즈 선택
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {productItem?.size?.map((s, i) => {
              return <Dropdown.Item>{s}</Dropdown.Item>;
            })}
          </Dropdown.Menu>
        </Dropdown>
        <div className="d-grid gap-2 add-btn">
          <Button variant="secondary" size="sm">
            추가
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
