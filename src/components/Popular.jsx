import React from "react";
import Slider from "./Slider";

const Popular = ({ data }) => {
  return (
    <div className="container my-5">
      <div className="row my-3 my-lg-5">
        <div className="mx-4 d-flex justify-content-between align-items-center">
          <div className="d-flex flex-row">
            <h2 className="fw-normal">Popular Apartment in Mysuru</h2>
            <div className="mx-3 d-none d-lg-block">
              <button className="btn bg__green text-white mx-2">ALL</button>
              <button className="btn bg__gray text-dark mx-2">2 BHK</button>
              <button className="btn bg__gray text-dark mx-2">3 BHK</button>
            </div>
          </div>
          <div>
            <button className="btn green">
              {data.moreBtn.name}
              <i class={`${data.moreBtn.iconClass}`}></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <Slider />
      </div>
    </div>
  );
};

export default Popular;
