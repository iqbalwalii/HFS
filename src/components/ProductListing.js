import React, { useEffect, useState } from "react";
import style from "../styles/Products.module.css";
import Card from "../components/ProductCard";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import Image from "next/image";
import Axios from "../utils/axios";
const ProductListing = (props) => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = props;
  const { brand } = props;
  console.log("searchTerm", searchTerm);
  useEffect(() => {
    const searchProducts = async (searchTerm, brand, props) => {
      console.log(props);
      if (brand) {
        const { data } = await Axios.get(`/api/products/?query=${searchTerm}`);
        if (data.message) {
          setProducts([]);
          return;
        } else {
          const prods = data?.products?.filter((prod) => {
            if (
              prod?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              prod?.description
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return prod;
            } else {
              return data?.products;
            }
          });
          setProducts(prods);
        }
      }
    };
    const fetchBrands = async (searchTerm) => {
      if (brand) {
        const { data } = await Axios.get(`/api/products/?brand=${searchTerm}`);
        data = {};
        console.log("data", data);
        if (data.message) {
          setProducts([]);
          return;
        } else {
          const prods = data?.products?.filter((prod) => {
            if (
              prod?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
              prod?.description
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return prod;
            } else {
              return data?.products;
            }
          });
          setProducts(prods);
        }
      }
    };
    const fetchProducts = async () => {
      const { data } = await Axios.get(`/api/products`);
      if (data.message) {
        setProducts([]);
        return;
      } else {
        setProducts(data.products);
      }
      console.log("All Products", data.products);
    };
    if (searchTerm) {
      searchProducts(searchTerm);
    } else if (brand) {
      fetchBrands(brand);
    } else {
      fetchProducts();
    }
  }, [searchTerm, brand]);
  return (
    <Container>
      <Row>
        <Col md={3} className={style.left}>
          <h3 className="text-center">FILTERS</h3>
          <Accordion>
            <Accordion.Item eventKey="0" className={style.AccordionItem}>
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>
                <div className={style.filters}>
                  <div>
                    <input type="checkbox" name="" id="" />4
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    4.5
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    5.5
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />6
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />7
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />8
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={style.AccordionItem}>
              <Accordion.Header>Color</Accordion.Header>
              <Accordion.Body>
                <div className={style.filters}>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Red
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    White
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Blue
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Magenta
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Black
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Orange
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={style.AccordionItem}>
              <Accordion.Header>SILHOUETTE</Accordion.Header>
              <Accordion.Body>
                <div className={style.filters}>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Air Jordan 1
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Air Jordan 2
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Air Jordan 4
                  </div>
                  <div>
                    <input type="checkbox" name="" id="" />
                    Dunk
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Row>
            <Col
              xs={{ span: 6, offset: 3 }}
              className="d-flex justify-content-center mt-5"
            >
              <Button variant="dark" className="mb-2">
                Apply
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={9}>
          {products && products.length > 0 ? (
            <div className={style.products}>
              {products.map((prod) => (
                <Card product={prod} key={prod.id} />
              ))}
            </div>
          ) : (
            <div className={style.box}>
              <h1>NO PRODUCTS</h1>
              <Image
                alt="empty box"
                src="/assets/images/box.svg"
                width="300px"
                height="300px"
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductListing;
