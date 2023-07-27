import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = ({cartItems}) => {
  return (
    <div className="home-container" id="home">
      <Navbar cartItems={cartItems}/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            En Sevdiğiniz Yiyecekler Sıcak ve Taze Olarak Teslim Edilir
          </h1>
          <p className="primary-text">
            Bizim restoranımızda, lezzetli yemeklerimiz en taze malzemelerle hazırlanır ve müşterilerimize sıcak bir şekilde sunulur. Menümüzde birçok seçenek bulunmakta ve her damak zevkine uygun yemekler sunmaktayız. Ayrıca, yemeklerimizi çevrimiçi sipariş verebilir ve sıcak ve taze bir şekilde teslim edilmesini sağlayabilirsiniz.
          </p>
          <Link to="/menu" style={{textDecoration:"none"}}><button className="secondary-button">
            Sipariş ver<FiArrowRight />{" "}
          </button></Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
