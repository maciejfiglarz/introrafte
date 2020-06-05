import React, {  useState } from "react";


const PortfolioChild = ({ link, text, img }) => {
  const [isShowDescription, setIsShowDescription] = useState(true);

  const onClickShowDescription = () => {
    console.log(isShowDescription);
    setIsShowDescription(!isShowDescription);
  };

  return (
    <div onClick={onClickShowDescription} className="portfolio-box">
      <div
        className={`describe ${
          isShowDescription ? "describe--visible" : ""
        }`}
      >
        <a target="_blank" href={link}>{text}</a>
      </div>
      <div className="more_info">
        {/* <i className="far fa-plus-square"></i> */}
        {isShowDescription && <i className="far fa-plus-square"></i>}
        {!isShowDescription && <i className="far fa-minus-square"></i>}
      </div>
      <img src={img} alt="" srcset="" />
    </div>
  );
};

export default PortfolioChild;
