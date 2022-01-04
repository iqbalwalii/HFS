import React, { useEffect, useState } from "react";
import style from "../styles/Products.module.css";
import Card from "../components/ProductCard";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Axios from "../utils/axios";
import { connect } from "react-redux";
const ProductListing = (props) => {
  const [products, setProducts] = useState([]);
  const { searchTerm } = props;
  console.log("searchTerm", searchTerm);
  useEffect(() => {
    const fetchProducts = async (searchTerm) => {
      const { data } = await Axios.get(`/api/products/?query=${searchTerm}`);
      console.log("data", data);
      if (data.message) {
        setProducts([]);
        return;
      } else {
        const prods = data?.products?.filter((prod) => {
          if (
            prod?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prod?.description?.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return prod;
          }
        });
        setProducts(prods);
      }
    };
    props.dispatch({ type: "SEARCH", payload: searchTerm });
    fetchProducts(searchTerm);
  }, [searchTerm]);
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
        </Col>
        <Col md={9}>
          {products && products.length > 0 ? (
            <div className={style.products}>
              {products.map((prod) => (
                <Card product={prod} key={prod.id} />
              ))}
            </div>
          ) : (
            <div className={style.products}>No Prods </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { store: state };
};
export default connect(mapStateToProps)(ProductListing);
