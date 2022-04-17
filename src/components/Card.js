// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Axios from "../utils/axios";
import SwiperCore, { Navigation, Mousewheel, Pagination } from "swiper";
import { getProducts } from "../services/product";
import { useEffect } from "react";
import { connect } from "react-redux";
SwiperCore.use([Navigation, Pagination, Mousewheel]);

function Card(props) {
  useEffect(() => {
    getProducts().then((res) => {
      props.dispatch({
        type: "GET_PRODUCTS",
        payload: res.products,
      });
    });
  }, []);
  console.log("Props", props);
  const { products } = props;
  return (
    <Container style={{ marginBottom: "3rem" }}>
      <Swiper
        navigation={true}
        pagination={false}
        mousewheel={true}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          390: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        style={{ width: "100%", margin: "2rem 0" }}
      >
        {products?.map((prod) => (
          <SwiperSlide key={prod.id}>
            <ProductCard product={prod} key={prod.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log("issssssssss", state);
  return {
    products: state.products,
  };
};
export default connect(mapStateToProps)(Card);
