import React from "react";

const JewelleryGuide = () => {
  return (
    <div className="container d-flex justify-content-between align-items-center mb-5">
      <div className="findSize d-flex justify-content-center flex-column align-items-start ps-4 me-2">
        <h3>Find Your Ring Size</h3>
        <button className="explore_btn">Explore Blog</button>
      </div>
      <div className="careGuide d-flex justify-content-center flex-column align-items-start ps-4 ms-2">
        <h3>The Jewellery Care Guide</h3>
        <button className="explore_btn">Explore Blog</button>
      </div>
    </div>
  );
};

export default JewelleryGuide;
