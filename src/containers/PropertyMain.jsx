import React from "react";
import PostedByCard from "../components/PostedByCard";
import ContactForm from "../components/ContactForm";
import PropertyCard from "../components/PropertyCard";
import AboutProperty from "../components/AboutProperty";
import AmenitiesBanner from "../components/AmenitiesBanner";
import LocationBanner from "../components/LocationBanner";
import OwnerProperties from "../components/OwnerProperties";
import RelatedProperties from "../components/RelatedProperties";
import OwnerBanner from "../components/OwnerBanner";

const PropertyMain = () => {
  return (
    <div className="container row mx-auto flex-w my-4">
      <div className="col-12 col-lg-8 col-xl-9">
        <PropertyCard />
        <AboutProperty />
        <AmenitiesBanner />
        <OwnerBanner />
        <LocationBanner />
        <OwnerProperties />
        <RelatedProperties />
      </div>
      <div className="col-12 col-lg-4 col-xl-3">
        <div className="row">
          <PostedByCard />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default PropertyMain;
