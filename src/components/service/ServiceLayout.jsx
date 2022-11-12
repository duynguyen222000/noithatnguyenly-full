import React from "react";
import { FaTruck, FaRegClock, FaRegMoneyBillAlt } from "react-icons/fa";
export const ServiceLayout = () => {
  return (
    <div id="service">
      <div className="container">
        <div className="service-layout d-flex justify-content-around">
          <div className="service-layout-item d-flex align-items-center">
            <div className="service-icon">
              <FaTruck />
            </div>
            <div className="service-title">
              <h3 className="service-title-heading">Giao hàng miễn phí</h3>
              <p className="service-title-sub">
                Giao hàng miễn phí trên toàn quốc
              </p>
            </div>
          </div>
          <div className="service-layout-item d-flex align-items-center">
            <div className="service-icon">
              <FaTruck />
            </div>
            <div className="service-title">
              <h3 className="service-title-heading">Giao hàng miễn phí</h3>
              <p className="service-title-sub">
                Giao hàng miễn phí trên toàn quốc
              </p>
            </div>
          </div>
          <div className="service-layout-item d-flex align-items-center">
            <div className="service-icon">
              <FaTruck />
            </div>
            <div className="service-title">
              <h3 className="service-title-heading">Giao hàng miễn phí</h3>
              <p className="service-title-sub">
                Giao hàng miễn phí trên toàn quốc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
