import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const ProducAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const url = "http://localhost:4000/products";
    // const url = process.env.REACT_APP_API_URL;
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
      <Container>
        <Row>
          {productList?.map((item, index) => {
            return (
              <Col key={index} lg={3}>
                <ProductCard item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProducAll;
