import React from "react";
import RelatedPropertiesCard from "./RelatedPropertiesCard";

const RelatedProperties = () => {
  return (
    <div className="container my-5 bg-white rounded-4 shadow-sm">
      <div className="row my-3 my-lg-5">
        <div className="mx-4 d-flex justify-content-between align-items-center mx-auto mt-5 px-5">
          <div className="d-flex flex-row">
            <h3 className="fw-normal">Related Properties</h3>
          </div>
          <div>
            <button className="btn green">
              See More
              <i class="fa-solid fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="row container">
        <RelatedPropertiesCard />
      </div>
    </div>
  );
};

export default RelatedProperties;
