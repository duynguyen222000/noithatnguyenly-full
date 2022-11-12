import React from "react";
import Slider from "react-slick";
import { FaRegStar, FaEye, FaShoppingCart } from "react-icons/fa";
export const SlideProduct = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slideproduct mt-5">
      <div className="container">
        <div className="title text-center">
          <h2 className="py-4">Sản phẩm nổi bật</h2>
        </div>
        <div className="slide-product">
          <Slider {...settings}>
            {Array.from(Array(10)).map((e) => (
              <div className="slide-product-item">
                <div className="item-img">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
                    alt=""
                  />
                </div>
                <div className="item-text py-2 px-2">
                  <div className="item-text-rate">
                    {Array.from(Array(5)).map((val, index) => {
                      return <FaRegStar />;
                    })}
                  </div>
                  <p className="item-text-name">Product 1</p>
                  <p className="item-text-price">123$</p>
                  <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                    <div className="btn btn-primary ">
                      {" "}
                      <FaEye />
                      View detail
                    </div>
                    <div className="btn btn-primary">
                      <FaShoppingCart />
                      Add to cart
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
