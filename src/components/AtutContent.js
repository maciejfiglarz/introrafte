import React from "react";

const AtutContent = ({ text, style, img }) => {
  console.log(text);
  return (
    <div className={style}>
      <div className="atut-img">
        <img src={img} alt="" srcset="" />
      </div>
      <div className="atut-span">{text}</div>
    </div>
  );
};

export default AtutContent;
