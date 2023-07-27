import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/fast-scooter-delivery.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Yemek Seç",
      
    },
    {
      image: ChooseMeals,
      title: "Adresi Haritadan Belirle",
      
    },
    {
      image: DeliveryMeals,
      title: "Hızlı Teslimat",
      
    },
  ];
  return (
    <div className="work-section-wrapper" id="about">
      <div className="work-section-top">
        <h1 className="primary-heading">Çalışma Prensibi</h1>
        <p className="primary-text">
        Restoranımızda işlem adımları, müşterilerin
         keyifli bir deneyim yaşaması
       ve işletmenin verimli bir şekilde
         çalışması için önemlidir.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
