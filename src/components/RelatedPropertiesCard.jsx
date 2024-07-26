import React from "react";

const RelatedPropertiesCard = () => {
  return (
    <div className="card mb-3 p-3 border-0 shadow rounded-4">
      <div className="row g-0">
        <div className="col-md-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/012e/c72e/c6a37f007da99e76339b1b8d264ede3f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SBPJEcYjfJf2sFlt7FwfJVH4WQ7Ff56qP6N1pstigiLq0tZyW6Dg6EHYQAI8lwJB0yfBmbL0nkp7k6bywQB-7KPsP-3upuJ863UNMHfEdSd~9vPsdj6xieEh-qKQeYI5vgNmq-p6R-gXXGiObAPlJXZgjf7uy86qgHNjuMW-qFtQgUhZc4CKZDho3TCHdmJoS9mhB3oSkKKXkOPse-at8OVQoGZe91Os~X7rP~r34CNBUEmBmdQOr0i5AuQ4Eg6vJvlvxVh-p7gMAFiNCFIo5GKsM1LXAn~N2q0juNzFQVvpPThJABFxndC7qc2BAeJInTQOoxBpRXre6hmw0pgKQQ__"
            className="img-fluid rounded-4 object-fit-cover h-100"
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">
              3BHK Apartment in Vijayanagar, Mysuru
            </h5>
            <button type="button" class="btn btn-success btn-sm ms-2">
              Ready tp move
            </button>
            <p className="card-text">
              <small className="light__gray">
                <i class="fa-solid fa-location-dot me-2"></i>
                2Nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd,
                Mysuru, Karnataka 570017
              </small>
            </p>
            {/* ========================= */}

            <div className="row row-cols-1 row-cols-md-2">
              <div className="d-flex flex-row ">
                <img
                  width={50}
                  src="https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg"
                  alt=""
                />
                <div className="mt-3 ms-3">
                  <small className="text-muted">Built-up Area</small>
                  <p className="blue">2400 Sqft</p>
                </div>
              </div>
              <div className="d-flex flex-row ">
                <img
                  width={50}
                  src="https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg"
                  alt=""
                />
                <div className="mt-3 ms-3">
                  <small className="text-muted">Built-up Area</small>
                  <p className="blue">2400 Sqft</p>
                </div>
              </div>
              <div className="d-flex flex-row ">
                <img
                  width={50}
                  src="https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg"
                  alt=""
                />
                <div className="mt-3 ms-3">
                  <small className="text-muted">Built-up Area</small>
                  <p className="blue">2400 Sqft</p>
                </div>
              </div>
              <div className="d-flex flex-row ">
                <img
                  width={50}
                  src="https://zameensquare.com/_next/static/media/Build_up_area.90df2d0e.svg"
                  alt=""
                />
                <div className="mt-3 ms-3">
                  <small className="text-muted">Built-up Area</small>
                  <p className="blue">2400 Sqft</p>
                </div>
              </div>
            </div>

            {/* ============================ */}
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column justify-content-between">
          <h3 className="text-nowrap">$ 30 Lac</h3>
          <div className="d-flex flex-column">
            <p className="card-text">
              <small className="text-muted">
                Posted On 20 June 2020 By Amal Sabu
              </small>
            </p>
            <button className="btn bg__blue text-white text-nowrap rounded-pill w-100">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPropertiesCard;
