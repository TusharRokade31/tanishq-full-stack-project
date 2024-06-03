import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FodBanner from "../../assets/images/fod-bannerd01.jpg";
import Goldex from "../../assets/images/gold-ex-desktop.jpg";
import ColorCharm from "../../assets/images/colour-charms-desktop.jpg";
import engringsBanner from "../../assets/images/engrings-wo-desktop.jpg";

const Slide = () => {
  return (
    <Carousel className="mb-5">
      <Carousel.Item interval={1000}>
        <img
          src={FodBanner}
          className="w-100 img-fluid"
          title="Festive of Diamond"
          alt="Festive of Diamond"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          src={Goldex}
          className="w-100 img-fluid"
          title="Gold Exchange"
          alt="Gold Exchange"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={ColorCharm}
          className="w-100 img-fluid"
          title="Color Charm"
          alt=" Color Charm"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={engringsBanner}
          className="w-100 img-fluid"
          title="Finger Rings"
          alt="Finger Rings"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
