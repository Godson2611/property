import React from "react";

const LocationBanner = () => {
  return (
    <div className="container bg-white p-5 rounded-3 shadow-sm mb-4">
      <div className="row">
        <h3 className="gray">Location</h3>
        <hr />
      </div>
      <div className="row">
        <div className="col-12 col-lg-5 g-2">
          <h4 className="light__gray">Address</h4>
          <h5>Apartment Name Goes Here</h5>
          <p className="gray">
            2nd Floor, Dejgow Building, Kannada Sahithya Parishath Rd, Mysuru,
            Karnataka 570017
          </p>
          <div className="d-flex align-items-center">
            <i class="fa-solid fa-location-dot text-success fa-lg"></i>
            <h4 className="text-primary ms-2 mt-2">View on map</h4>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <img
            src="https://s3-alpha-sig.figma.com/img/b2da/d38e/e687922a66e4d03d2478403a67e8d2e8?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QuL6u9ebqgnEGfp1VpgipYrD3cKIxZDTo6W~W5QWYkZRo2Tt~vgOgLg1Go0hzpvkSugeeqUJGJ~hjiNTTdnl5gSAS23q9ghZbFQ2SZV9~cb20csX01CoEP6CdZTEJpmY7kFEYf4kGI1vtAqwWY0l0bTD08atNbcbqufVa2mZbs6raFx9bqQkn7ki77FmlpYf1~1LlV8mSkzBFko7L~YOaf5GINh9aSvQO59LAKuwdHYQZE7wuu1UxckbGO8aqFdCMWd06JDx-xXBWn5t5TH9qfp2Bx3rCW2jlVuryl-HkR~eDyYsAa33XCmqAWrRDN1rlrEDs35PfHWmMnP9hBOJeQ__"
            alt="location-img"
            className="img-fluid rounded-4 h-100 object-fit-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LocationBanner;
