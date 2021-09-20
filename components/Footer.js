import React from "react";
import footer from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={footer.main}>
      <div className={footer.logo}>
        <img src="./assets/images/logo.png" alt="Logo" />
      </div>
      <div className={footer.section}>
        <h5>COMPANY</h5>
        <ul>
          <li>iqbalwali@hfs.com</li>
          <li>iqbalwali@hfs.com</li>
          <li>iqbalwali@hfs.com</li>
          <li>iqbalwali@hfs.com</li>
          <li>iqbalwali@hfs.com</li>
        </ul>
      </div>
      <div className={footer.section}>
        <h5>CONTACT US</h5>
        <ul>
          <li>iqbalwal786@gmail.com</li>
          <li>iqbalwal786@gmail.com</li>
          <li>iqbalwal786@gmail.com</li>
          <li>iqbalwal786@gmail.com</li>
        </ul>
      </div>
      <div className={footer.section}>
        <h5>ADDRESS</h5>
        <ul>
          <li>NEW APARTMENT</li>
          <li>SRINAGAR</li>
          <li>JK</li>
          <li>190002</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
