import React from "react";

const OwnerBanner = () => {
  return (
    <div className="container">
      <div className="row bg-white rounded-4 mb-4 shadow-sm position-relative p-5 p-lg-0">
        <div className="col">
          <img
            className="img-fluid d-none d-lg-block position-absolute h-100 w-100 start-0 object-fit-fill"
            src="https://zameensquare.com/_next/static/media/talk-to-owner-background.ffacde95.png"
            alt="Owner-Banner"
          />
        </div>
        <div className="col-12 col-lg-6 text-center text-lg-start p-4">
          <h2>Want to talk with owner?</h2>
          <p className="light__gray">
            Lorem ipsum dolor sit amet consectetur. Ut dictumst hac viverra
            tincidunt porttitor. Viverra morbi eu ut nisi vivamus varius.
          </p>
          <button className="btn bg__blue text-white text-nowrap rounded-pill px-5 text-uppercase">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnerBanner;
