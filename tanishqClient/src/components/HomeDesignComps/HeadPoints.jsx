import React from "react";
import dividerLine from "../../assets/images/line-design.svg"

const HeadPoints = ({heading}) => {
  return (
    <>
    <div className="heading ">
      <h2>{heading.title}</h2>
      <p className="fw-normal">{heading.point}</p>
      <img src={dividerLine} alt="" />
    </div>
    </>
  );
};

export default HeadPoints;
