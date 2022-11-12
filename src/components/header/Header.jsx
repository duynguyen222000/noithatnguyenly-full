import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserAlt,
  FaHeart,
  FaShoppingBag,
  FaAlignRight,
} from "react-icons/fa";
export const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setShow(true);
        } else {
          setShow(false);
        }
      });
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className="header-top d-flex align-items-center justify-content-center justify-content-md-between">
          <div className="header-top_left d-flex  ">
            <p className="item ">
              <FaPhoneAlt />
              123456
            </p>
            <p className="item d-none d-md-block">Giới thiệu</p>
            <p className="item d-none d-md-block">Khuyến mãi</p>
            <p className="item d-none d-md-block active-text">
              Giảm giá đặc biệt
            </p>
          </div>
          <div className="header-top_right d-flex d-none d-md-flex">
            <div className="ico">
              <FaMapMarkerAlt />
            </div>
            <div className="ico">
              <FaHeart />
            </div>
            <div className="ico">
              <FaShoppingBag />
            </div>
            <div className="ico">
              <FaUserAlt />
              Login
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`${
          show && "fixed-top"
        } navbar navbar-nav-scroll navbar-expand-lg bg-light`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Logo company
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaAlignRight />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav d-flex flex-wrap m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sản phẩm
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Phòng
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Thiết kế nội thất
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Giới thiệu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Góc ý tưởng
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
