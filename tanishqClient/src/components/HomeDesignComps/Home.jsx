import Slide from "./Slide";
import HeadPoints from "./HeadPoints";
import Categories from "./Categories";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Collections from "./Collections";
import NewRelease from "./NewRelease";
import RivhaBride from "../../assets/images/Rivaah-Bride.jpg"
import RivhaDetails from "../../assets/images/rivah_desktop.jpg"
import JewelleryGuide from "./JewelleryGuide";
import { useSelector } from "react-redux";


const Home = () => {
  
  const [data, SetData] = useState([]);
  const [Gendata, SetGenData] = useState([]);



  

  useEffect(() => {
    axios
      .get("http://localhost:8001/categories/get-categories")
      .then(function (response) {
        SetData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, [data]);

  useEffect(() => {
    axios
      .get("http://localhost:8001/genders/get-genders")
      .then(function (response) {
        SetGenData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }, []);


  



  const filterdDataCategory = data.filter(
    (data) =>
      data.CategoryType !== "collection" &&
      data.CategoryType !== "latest release"
  );

  const filterdDataCollection = data.filter(
    (data) => data.CategoryType == "collection"
  );

  const filterdDataNewRelease = data.filter(
    (data) => data.CategoryType == "latest release"
  );

  return (
    <>
      <Slide />
      
      <HeadPoints
        heading={{
          title: "Shop By Category",
          point: "Browse through your favorite categories. We've got them all!",
        }}
      />

      <div className="catgory_list">
        <div className="row row-cols-6 g-0">
          {filterdDataCategory.map((data) => {
            return <Categories key={data.name} data={data} />;
          })}
        </div>
      </div>

      <HeadPoints
        heading={{
          title: "Shop By Collections",
          point:
            "Whatever the occasion, we've got a beautiful piece of jewellery for you.",
        }}
      />

      <div className="d-flex justify-content-center align-items-center mb-5">
        {filterdDataCollection.map((data) => {
          return <Collections key={data.name} data={data} />;
        })}
      </div>

      <HeadPoints
        heading={{
          title: "Pick Up Where You Left Off!",
          point:
            "Our products tend to sell out quickly, so don't delay in completing your purchase.",
        }}
      />
      <div className="container gift w-100 ">
        <div className="giftBanner d-flex align-items-center justify-content-center p-5">
          <button type="button" className="explore_btn me-5">
            Explore More
          </button>
        </div>
      </div>

      <HeadPoints
        heading={{
          title: "New For You!",
          point: "Our latest releases, just for you !",
        }}
      />

      <div className="d-flex justify-content-center align-items-center mb-5">
        {filterdDataNewRelease.map((data) => {
          return <NewRelease key={data.name} data={data} />;
        })}
      </div>

      <HeadPoints
        heading={{
          title: "Shop By Gender",
          point: "First-class jewelry for first-class Men, Women & Children.",
        }}
      />

      <div className="d-flex justify-content-center align-items-center mb-5">
        {Gendata.map((data) => {
          return <Collections key={data.name} data={data} />;
        })}
      </div>

      
        <div className="container px-4">
        <div className="row  justify-content-center row-cols-2 g-0">
            <div className="col">
              <img src={RivhaBride} alt="" />
            </div>
            <div className="col">
              <img src={RivhaDetails} alt="" />
              <div className="rivha-btn">
                <button className="explore_btn mx-2">Arrange a Callback</button><button className="explore_btn mx-2">Explore Now</button>
              </div>
            </div>
        </div>
        </div>

        <HeadPoints
        heading={{
          title: "Jewellery Guides",
          point: "Check out our ready made guides to make your buying process easier.",
        }}
      />

      <JewelleryGuide/>
        
    </>
  );
};

export default Home;
